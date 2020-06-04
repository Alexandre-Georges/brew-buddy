import { derived, writable } from 'svelte/store';

import { DEFAULT_BOIL_VOLUME, DEFAULT_TARGET_VOLUME, DEFAULT_FG } from './defaults';
import { isSet } from '../helpers/input-helpers';

export let store = writable({
	boilVolume: DEFAULT_BOIL_VOLUME,
	targetVolume: DEFAULT_TARGET_VOLUME,
	targetGravity: DEFAULT_FG,
});

export const boilGravity = derived(
	store,
	$store => {
		if (!isSet($store.boilVolume) || !isSet($store.targetVolume) || !isSet($store.targetGravity)) {
			return 0;
		}
		return (1 + ($store.targetGravity - 1) * $store.targetVolume / $store.boilVolume).toFixed(4);
	}
);
