import { derived, writable } from 'svelte/store';

import { DEFAULT_VOLUME, DEFAULT_FG } from './defaults';
import { isSet } from '../helpers/input-helpers';

export let store = writable({
	gallonVolume: DEFAULT_VOLUME,
	targetGravity: DEFAULT_FG,
});

export const points = derived(
	store,
	$store => {
		if (!isSet($store.gallonVolume) || !isSet($store.targetGravity)) {
			return 0;
		}
		return ($store.gallonVolume * ($store.targetGravity - 1) * 1000).toFixed(0);
	}
);
