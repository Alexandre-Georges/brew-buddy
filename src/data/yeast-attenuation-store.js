import { derived, writable } from 'svelte/store';

import { DEFAULT_OG, DEFAULT_YEAST_ATTENUATION } from './defaults';
import { isSet } from '../helpers/input-helpers';

export let store = writable({
	og: DEFAULT_OG,
	percentageAttenuation: DEFAULT_YEAST_ATTENUATION,
});

export const fg = derived(
	store,
	$store => {
		if (!isSet($store.og) || !isSet($store.percentageAttenuation)) {
			return 0;
		}
		return ($store.og - ($store.og - 1) * $store.percentageAttenuation / 100).toFixed(3);
	}
);
