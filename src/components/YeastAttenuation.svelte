
<script>
	import { store, fg } from '../data/yeast-attenuation-store';
</script>

<div class="col s12">
	<div class="row">
		<h4>Yeast Attenuation</h4>
	</div>
	<form class="row" on:submit|preventDefault>
		<div class="col s4 input-field">
			<input id="ya-original-gravity" class="small" type="number" min="0.0" max="2.0" step="0.001" bind:value="{$store.og}" />
			<label for="ya-original-gravity">Original Gravity</label>
		</div>
		<div class="col s4 input-field">
			<input id="ya-percentage-attenuation" class="small" type="number" min="0" max="100" step="0.1" bind:value="{$store.percentageAttenuation}" />
			<label for="ya-percentage-attenuation">Attenuation (percent)</label>
		</div>
		<div class="col s4 input-field pink lighten-5 result">
			<input id="ya-final-gravity" class="small" type="number" disabled bind:value="{$fg}" />
			<label for="ya-final-gravity">Final gravity</label>
		</div>
	</form>
</div>
