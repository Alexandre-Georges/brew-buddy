
<script>
	import { store, gramSugar } from '../data/priming-sugar-store';
</script>

<div class="col s12">
	<div class="row">
		<h4>Priming Sugar</h4>
	</div>
	<form class="row" on:submit|preventDefault>
		<div class="col s3 input-field">
			<input id="co2-volume" class="small" type="number" min="0.0" max="4.0" step="0.1" bind:value="{$store.co2Volume}" />
			<label for="co2-volume">CO² volume</label>
		</div>
		<div class="col s3 input-field">
			<input id="gallon-volume" class="small" type="number" min="0.1" max="100" step="0.1" bind:value="{$store.gallonVolume}" />
			<label for="gallon-volume">Volume (gallon)</label>
		</div>
		<div class="col s3 input-field">
			<input id="celsius-temperature" class="small" type="number" min="0" max="40" step="0.1" bind:value="{$store.celsiusTemperature}" />
			<label for="celsius-temperature">Temperature (celsius)</label>
		</div>
		<div class="col s3 input-field pink lighten-5 result">
			<input id="gram-sugar" class="small" type="number" disabled bind:value="{$gramSugar}" />
			<label for="gram-sugar">Sugar quantity (gram)</label>
		</div>
	</form>
</div>
