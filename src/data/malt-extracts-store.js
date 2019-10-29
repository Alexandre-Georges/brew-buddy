import { derived, writable } from 'svelte/store';

import { DEFAULT_MALT_WEIGHT, DEFAULT_MALT_DENSITY } from './defaults';

export let store = writable({
	malts: [
		{ ounceQuantity: DEFAULT_MALT_WEIGHT, pointDensity: DEFAULT_MALT_DENSITY },
	],
});

export function computePoints(malt) {
	return malt.ounceQuantity * malt.pointDensity;
};

export function addMalt(malt) {
	store.update(store => {
		const copy = Object.assign({}, store);
		copy.malts.push(malt);
		copy.malts = Array.from(copy.malts);
		return copy;
	});
};

export function deleteMalt(index) {
	store.update(store => {
		const copy = Object.assign({}, store);
		copy.malts.splice(index, 1);
		copy.malts = Array.from(copy.malts);
		return copy;
	});
};

export const pointDensityTotal = derived(
	store,
	$store => {
		return $store.malts.reduce((total, malt) => {
			return total + computePoints(malt);
		}, 0);
	}
);

export const ounceQuantityTotal = derived(
	store,
	$store => {
		return $store.malts.reduce((total, malt) => {
			return total + malt.ounceQuantity;
		}, 0);
	}
);
