
<script>
	import { store, correctedGravity } from '../data/gravity-correction-store';
</script>

<div class="col s12">
	<div class="row">
		<h4>Gravity Correction</h4>
	</div>
	<form class="row" on:submit|preventDefault>
		<div class="col s4 input-field">
			<input id="gc-gravity" class="small" type="number" min="0.0" max="2.0" step="0.001" bind:value="{$store.gravity}" />
			<label for="gc-gravity">Gravity</label>
		</div>
		<div class="col s4 input-field">
			<input id="gc-celsius-temperature" class="small" type="number" min="0.0" max="40.0" step="0.1" bind:value="{$store.celsiusTemperature}" />
			<label for="gc-celsius-temperature">Temperature (celsius)</label>
		</div>
		<div class="col s4 input-field pink lighten-5 result">
			<input id="gc-corrected-gravity" class="small" type="number" disabled bind:value="{$correctedGravity}"/>
			<label for="gc-corrected-gravity">Corrected Gravity</label>
		</div>
	</form>
</div>