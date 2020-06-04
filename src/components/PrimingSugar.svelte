
<script>
	import { store, gramSugar } from '../data/priming-sugar-store';
</script>

<div class="col s12">
	<div class="row">
		<h4>Priming Sugar</h4>
	</div>
	<form class="row" on:submit|preventDefault>
		<div class="col s3 input-field">
			<input id="ps-co2-volume" class="small" type="number" min="0.0" max="4.0" step="0.1" bind:value="{$store.co2Volume}" />
			<label for="ps-co2-volume">CO² Volume</label>
		</div>
		<div class="col s3 input-field">
			<input id="ps-gallon-volume" class="small" type="number" min="0.1" max="100" step="0.1" bind:value="{$store.gallonVolume}" />
			<label for="ps-gallon-volume">Volume (gallon)</label>
		</div>
		<div class="col s3 input-field">
			<input id="ps-celsius-temperature" class="small" type="number" min="0" max="40" step="0.1" bind:value="{$store.celsiusTemperature}" />
			<label for="ps-celsius-temperature">Temperature (celsius)</label>
		</div>
		<div class="col s3 input-field pink lighten-5 result">
			<input id="ps-gram-sugar" class="small" type="number" disabled bind:value="{$gramSugar}" />
			<label for="ps-gram-sugar">Sugar Quantity (gram)</label>
		</div>
	</form>
</div>
