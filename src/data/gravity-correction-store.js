import { derived, writable } from 'svelte/store';

import { DEFAULT_OG, DEFAULT_TEMPERATURE } from './defaults';
import { isSet } from '../helpers/input-helpers';
import { celsiusToFahrenheit } from '../helpers/formula-helpers';

export let store = writable({
	gravity: DEFAULT_OG,
	celsiusTemperature: DEFAULT_TEMPERATURE,
});

export const correctedGravity = derived(
	store,
	$store => {
		if (!isSet($store.gravity) || !isSet($store.celsiusTemperature)) {
			return 0;
		}
		const fahrenheitTemperature = celsiusToFahrenheit($store.celsiusTemperature);
		return ($store.gravity * (
			1.00130346
			- fahrenheitTemperature * 1.34722124 * Math.pow(10, -4)
			+ Math.pow(fahrenheitTemperature, 2) * 2.04052596 * Math.pow(10, -6)
			- Math.pow(fahrenheitTemperature, 3) * 2.32820948 * Math.pow(10, -9)
		)).toFixed(4);
	}
);
