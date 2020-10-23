import { derived, writable } from 'svelte/store';
import { Matrix } from 'ml-matrix';
import { fcnnlsVector } from 'ml-fcnnls';

import { DEFAULT_VOLUME } from './defaults';
import { isSet } from '../helpers/input-helpers';

export let store = writable({
	gallonVolume: DEFAULT_VOLUME,
	oCa: 0,
	oMg: 0,
	oSo: 0,
	oNa: 0,
	oCl: 0,
	oHco: 0,
	tCa: 80,
	tMg: 5,
	tSo: 80,
	tNa: 25,
	tCl: 75,
	tHco: 100,
	hasCaco3: true,
	hasNahco3: true,
	hasCaoh2: true,
	hasNaoh2: true,
	hasCaso4: true,
	hasMgso4: true,
	hasCacl2: true,
	hasMgcl2: true,
	hasNacl: true,
});

const addSalt = (X, hasSalt, saltImpact) => {
	if (hasSalt === true) {
		for (let i = 0; i < saltImpact.length; i++) {
			X[i].push(saltImpact[i]);
		}
	}
	return X;
};

const SALT_MAPPING = [
	{ storeHas: 'hasCaco3', result: 'caco3' },
	{ storeHas: 'hasNahco3', result: 'nahco3' },
	{ storeHas: 'hasCaoh2', result: 'caoh2' },
	{ storeHas: 'hasNaoh2', result: 'naoh2' },
	{ storeHas: 'hasCaso4', result: 'caso4' },
	{ storeHas: 'hasMgso4', result: 'mgso4' },
	{ storeHas: 'hasCacl2', result: 'cacl2' },
	{ storeHas: 'hasMgcl2', result: 'mgcl2' },
	{ storeHas: 'hasNacl', result: 'nacl' },
];

const getAlkanity = hco => {
	if (!isSet(hco)) {
		return 0;
	}
	return (hco * 50 / 61);
};
export const oAlkanity = derived(store, $store => getAlkanity($store.oHco).toFixed(0));
export const tAlkanity = derived(store, $store => getAlkanity($store.tHco).toFixed(0));


const getResidualAlkanity = (hco, ca, mg) => {
	const alkanity = getAlkanity(hco);
	return alkanity - (ca / 1.4 + mg / 1.7)
};
export const oResidualAlkanity = derived(store, $store => getResidualAlkanity($store.oHco, $store.oCa, $store.oMg).toFixed(0));
export const tResidualAlkanity = derived(store, $store => getResidualAlkanity($store.tHco, $store.tCa, $store.tMg).toFixed(0));

export const waterChem = derived(
	store,
	$store => {
		const defaultValues = {
			water: {
				ca: 0,
				mg: 0,
				so: 0,
				na: 0,
				cl: 0,
				hco: 0,
			},
			salts: {
				caco3: 0,
				nahco3: 0,
				caoh2: 0,
				naoh2: 0,
				caso4: 0,
				mgso4: 0,
				cacl2: 0,
				mgcl2: 0,
				nacl: 0,
			}
		};
		if (
			!isSet($store.gallonVolume) ||
			!isSet($store.oCa) ||
			!isSet($store.oMg) ||
			!isSet($store.oSo) ||
			!isSet($store.oNa) ||
			!isSet($store.oCl) ||
			!isSet($store.oHco) ||
			!isSet($store.tCa) ||
			!isSet($store.tMg) ||
			!isSet($store.tSo) ||
			!isSet($store.tNa) ||
			!isSet($store.tCl) ||
			!isSet($store.tHco)) {
			return defaultValues;
		}
		const toConcentration = val => val * $store.gallonVolume;
		const X = [
			// Ca
			[],
			// Mg
			[],
			// So
			[],
			// Na
			[],
			// Cl
			[],
			// Hco
			[],
		];

		addSalt(X, $store.hasCaco3, [106, 0, 0, 0, 0, 0]);
		addSalt(X, $store.hasNahco3, [0, 0, 0, 0, 0, 188]);
		addSalt(X, $store.hasCaoh2, [143, 0, 0, 0, 0, 0]);
		addSalt(X, $store.hasNaoh2, [0, 0, 0, 15.2, 0, 0]);
		addSalt(X, $store.hasCaso4, [61.5, 0, 147.4, 0, 0, 0]);
		addSalt(X, $store.hasMgso4, [0, 26, 102.0, 0, 0, 0]);
		addSalt(X, $store.hasCacl2, [72, 0, 0, 127.4, 0, 0]);
		addSalt(X, $store.hasMgcl2, [0, 31.6, 0, 0, 92.1, 0]);
		addSalt(X, $store.hasNacl, [0, 0, 0, 103.9, 160.3, 0]);

		const Xmatrix = new Matrix(X);
		const y = [
			toConcentration($store.tCa - $store.oCa),
			toConcentration($store.tMg - $store.oMg),
			toConcentration($store.tSo - $store.oSo),
			toConcentration($store.tNa - $store.oNa),
			toConcentration($store.tCl - $store.oCl),
			toConcentration($store.tHco - $store.oHco),
		];
		try {
			const saltResults = fcnnlsVector(Xmatrix, y);

			for (let i = 0; i < saltResults.length; i++) {
				saltResults[i] = saltResults[i].toFixed(2);
			}

			const waterResults = [];
			for (let i = 0; i < X.length; i++) {
				let waterResult = 0;
				for (let j = 0; j < saltResults.length; j++) {
					waterResult += saltResults[j] * X[i][j];
				}
				waterResults[i] = waterResult;
			}
			const alkanity = getAlkanity(waterResults[5]);
			const residualAlkanity = getResidualAlkanity(waterResults[5], waterResults[0], waterResults[1]);

			for (let i = 0; i < X.length; i++) {
				waterResults[i] = waterResults[i].toFixed(0);
			}

			const salts = {}
			let index = 0;
			for (const salt of SALT_MAPPING) {
				let saltValue = 0;
				if ($store[salt.storeHas] === true) {
					saltValue = saltResults[index];
					index++;
				}
				salts[salt.result] = saltValue;
			}
			return {
				water: {
					ca: waterResults[0],
					mg: waterResults[1],
					so: waterResults[2],
					na: waterResults[3],
					cl: waterResults[4],
					hco: waterResults[5],
					alkanity: alkanity.toFixed(0),
					residualAlkanity: residualAlkanity.toFixed(0),
				},
				salts,
			};
		} catch (exception) {
			return defaultValues;
		}
	}
);
