
<script>
	import { store, fg } from '../data/yeast-attenuation-store';
</script>

<div class="col s12">
	<div class="row">
		<h4>Yeast Attenuation</h4>
	</div>
	<form class="row" on:submit|preventDefault>
		<div class="col s4 input-field">
			<input id="original-gravity" class="small" type="number" min="0.0" max="2.0" step="0.001" bind:value="{$store.og}" />
			<label for="original-gravity">Original Gravity</label>
		</div>
		<div class="col s4 input-field">
			<input id="percentage-attenuation" class="small" type="number" min="0" max="100" step="0.1" bind:value="{$store.percentageAttenuation}" />
			<label for="percentage-attenuation">Attenuation (percent)</label>
		</div>
		<div class="col s4 input-field pink lighten-5 result">
			<input id="final-gravity" class="small" type="number" disabled bind:value="{$fg}" />
			<label for="final-gravity">Final gravity</label>
		</div>
	</form>
</div>
