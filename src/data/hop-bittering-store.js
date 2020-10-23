import { derived, writable } from 'svelte/store';

import {
	DEFAULT_VOLUME,
	DEFAULT_BOIL_VOLUME,
	DEFAULT_FG,
	DEFAULT_HOP_WEIGHT,
	DEFAULT_HOP_AA,
	DEFAULT_HOP_BOIL_TIME,
} from './defaults';
import { isSet } from '../helpers/input-helpers';

export let store = writable({
	gallonBoilVolume: DEFAULT_BOIL_VOLUME,
	gallonTargetVolume: DEFAULT_VOLUME,
	targetGravity: DEFAULT_FG,
	hops: [
		{ ounceQuantity: DEFAULT_HOP_WEIGHT, percentageAA: DEFAULT_HOP_AA, minuteBoilTime: DEFAULT_HOP_BOIL_TIME },
	],
});

export function computeBoilGravity(gallonBoilVolume, gallonTargetVolume, targetGravity) {
	return 1 + (targetGravity - 1) * gallonTargetVolume / gallonBoilVolume;
};

export function computeAAUs(hop) {
	return hop.ounceQuantity * hop.percentageAA;
};

function computeUtilization(boilGravity, minuteBoilTime) {
	return 1.65 * Math.pow(0.000125, boilGravity - 1) * (1 - Math.exp(-0.04 * minuteBoilTime)) / 4.15
};

export function computeIBUs(gallonBoilVolume, gallonTargetVolume, targetGravity, hop) {
	const boilGravity = computeBoilGravity(gallonBoilVolume, gallonTargetVolume, targetGravity);
	return computeAAUs(hop) * computeUtilization(boilGravity, hop.minuteBoilTime) * 75 / gallonTargetVolume;
};

export function addHop(hop) {
	store.update(store => {
		const copy = Object.assign({}, store);
		copy.hops.push(hop);
		copy.hops = Array.from(copy.hops);
		return copy;
	});
};

export function deleteHop(index) {
	store.update(store => {
		const copy = Object.assign({}, store);
		copy.hops.splice(index, 1);
		copy.hops = Array.from(copy.hops);
		return copy;
	});
};

export const ounceQuantityTotal = derived(
	store,
	$store => {
		return $store.hops.reduce((total, hop) => {
			return total + hop.ounceQuantity;
		}, 0);
	}
);

export const aausTotal = derived(
	store,
	$store => {
		return $store.hops.reduce((total, hop) => {
			return total + computeAAUs(hop);
		}, 0);
	}
);

export const ibusTotal = derived(
	store,
	$store => {
		if (!isSet($store.gallonBoilVolume) || !isSet($store.gallonTargetVolume) || !isSet($store.targetGravity)) {
			return 0;
		}
		return $store.hops.reduce((total, hop) => {
			return total + computeIBUs($store.gallonBoilVolume, $store.gallonTargetVolume, $store.targetGravity, hop);
		}, 0);
	}
);
