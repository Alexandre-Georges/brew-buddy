<script>
	import { store, abv } from '../data/alcohol-volume-store';
</script>

<div class="col s12">
	<div class="row">
		<h4>Alcohol Volume</h4>
	</div>
	<form class="row" on:submit|preventDefault>
		<div class="col s4 input-field">
			<input id="original-gravity" class="small" type="number" min="0.0" max="2.0" step="0.001" bind:value="{$store.og}" />
			<label for="original-gravity">Original Gravity</label>
		</div>
		<div class="col s4 input-field">
			<input id="final-gravity" class="small" type="number" min="0.0" max="2.0" step="0.001" bind:value="{$store.fg}" />
			<label for="final-gravity">Final Gravity</label>
		</div>
		<div class="col s4 input-field pink lighten-5 result">
			<input id="abv" class="small" type="number" disabled bind:value="{$abv}" />
			<label for="abv">Alcohol (ABVs)</label>
		</div>
	</form>
</div>
