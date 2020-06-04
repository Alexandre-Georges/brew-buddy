
<script>
	import { store, boilGravity } from '../data/concentrated-gravity-store';
</script>

<div class="col s12">
	<div class="row">
		<h4>Concentrated Gravity</h4>
	</div>
	<form class="row" on:submit|preventDefault>
		<div class="col s3 input-field">
			<input id="cg-boil-volume" class="small" type="number" min="0.1" max="200" step="0.1" bind:value="{$store.boilVolume}" />
			<label for="cg-boil-volume">Boil Volume</label>
		</div>
		<div class="col s3 input-field">
			<input id="cg-target-volume" class="small" type="number" min="0.1" max="200" step="0.1" bind:value="{$store.targetVolume}" />
			<label for="cg-target-volume">Target Volume</label>
		</div>
		<div class="col s3 input-field">
			<input id="cg-target-gravity" class="small" type="number" min="0.0" max="2.0" step="0.001" bind:value="{$store.targetGravity}" />
			<label for="cg-target-gravity">Target Gravity</label>
		</div>
		<div class="col s3 input-field pink lighten-5 result">
			<input id="cg-boil-gravity" class="small" type="number" disabled bind:value="{$boilGravity}"/>
			<label for="cg-boil-gravity">Boil Gravity</label>
		</div>
	</form>
</div>