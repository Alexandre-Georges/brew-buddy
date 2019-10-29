
<script>
	import { store, correctedGravity } from '../data/gravity-correction-store';
</script>

<div class="col s12">
	<div class="row">
		<h4>Gravity Correction</h4>
	</div>
	<form class="row" on:submit|preventDefault>
		<div class="col s4 input-field">
			<input id="gravity" class="small" type="number" min="0.0" max="2.0" step="0.001" bind:value="{$store.gravity}" />
			<label for="gravity">Gravity</label>
		</div>
		<div class="col s4 input-field">
			<input id="celsius-temperature" class="small" type="number" min="0.0" max="40.0" step="0.1" bind:value="{$store.celsiusTemperature}" />
			<label for="celsius-temperature">Temperature (celsius)</label>
		</div>
		<div class="col s4 input-field pink lighten-5 result">
			<input id="corrected-gravity" class="small" type="number" disabled bind:value="{$correctedGravity}"/>
			<label for="corrected-gravity">Corrected Gravity</label>
		</div>
	</form>
</div>