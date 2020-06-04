import { derived, writable } from 'svelte/store';

import { DEFAULT_EXTRACT_AMOUNT } from './defaults';
import { isSet } from '../helpers/input-helpers';

export let store = writable({
	dmeToLmeDmeAmount: DEFAULT_EXTRACT_AMOUNT,
	dmeToLmeLmeAmount: DEFAULT_EXTRACT_AMOUNT,
});

export const dmeToLmeLmeAmount = derived(
	store,
	$store => {
		if (!isSet($store.dmeToLmeDmeAmount)) {
			return 0;
		}
		return ($store.dmeToLmeDmeAmount * 43 / 36).toFixed(4);
	}
);

export const dmeToLmeDmeAmount = derived(
	store,
	$store => {
		if (!isSet($store.dmeToLmeLmeAmount)) {
			return 0;
		}
		return ($store.dmeToLmeLmeAmount * 36 / 43).toFixed(4);
	}
);
