
<script>
	import { store, points } from '../data/malt-points-store';
</script>

<div class="col s12">
	<div class="row">
		<h4>Malt Points</h4>
	</div>
	<form class="row" on:submit|preventDefault>
		<div class="col s4 input-field">
			<input id="mp-gallon-volume" class="small" type="number" min="0.1" max="100" step="0.1" bind:value="{$store.gallonVolume}" />
			<label for="mp-gallon-volume">Volume (gal)</label>
		</div>
		<div class="col s4 input-field">
			<input id="mp-target-gravity" class="small" type="number" min="0.0" max="2.0" step="0.001" bind:value="{$store.targetGravity}" />
			<label for="mp-target-gravity">Target Gravity</label>
		</div>
		<div class="col s4 input-field pink lighten-5 result">
			<input id="mp-points" class="small" type="number" disabled bind:value="{$points}"/>
			<label for="mp-points">Points</label>
		</div>
	</form>
</div>