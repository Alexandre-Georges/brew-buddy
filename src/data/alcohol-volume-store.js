import { derived, writable } from 'svelte/store';

import { DEFAULT_OG, DEFAULT_FG } from './defaults';
import { isSet } from '../helpers/input-helpers';

export let store = writable({
	og: DEFAULT_OG,
	fg: DEFAULT_FG,
});

export const abv = derived(
	store,
	$store => {
		if (!isSet($store.og) || !isSet($store.fg)) {
			return 0;
		}
		return (76.08 * ($store.og - $store.fg) / (1.775 - $store.og) * $store.fg / 0.794).toFixed(2);
	}
);
