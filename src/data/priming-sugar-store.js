import { derived, writable } from 'svelte/store';

import { DEFAULT_CO2_VOLUME, DEFAULT_VOLUME, DEFAULT_TEMPERATURE } from './defaults';
import { isSet } from '../helpers/input-helpers';
import { celsiusToFahrenheit } from '../helpers/formula-helpers';

export let store = writable({
	co2Volume: DEFAULT_CO2_VOLUME,
	gallonVolume: DEFAULT_VOLUME,
	celsiusTemperature: DEFAULT_TEMPERATURE,
});


export const gramSugar = derived(
	store,
	$store => {
		if (!isSet($store.co2Volume) || !isSet($store.gallonVolume) || !isSet($store.celsiusTemperature)) {
			return 0;
		}

		const fahrenheitTemperature = celsiusToFahrenheit($store.celsiusTemperature);
		return (15.195 * $store.gallonVolume * ($store.co2Volume - 3.0378 + 5.0062 * Math.pow(10, -2) * fahrenheitTemperature - 2.6555 * Math.pow(10, -4) * Math.pow(fahrenheitTemperature, 2))).toFixed(1);
	}
);
