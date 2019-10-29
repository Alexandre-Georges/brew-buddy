<script>
	import {
		store,
		addHop as storeAddHop,
		deleteHop as storeDeleteHop,
		computeAAUs,
		computeIBUs,
		ounceQuantityTotal,
		aausTotal,
		ibusTotal,
	} from '../data/hop-bittering-store';

	let ounceQuantity = 1;
	let percentageAA = 5;
	let minuteBoilTime = 30;

	function addHop() {
		if (ounceQuantity > 0 && percentageAA > 0 && minuteBoilTime > 0) {
			storeAddHop({ ounceQuantity, percentageAA, minuteBoilTime });
		}
	}

</script>

<div class="col s12">
	<div class="row">
		<h4>Hop Bittering</h4>
	</div>
	<div class="row">
		<h5>Wort</h5>
	</div>
	<div class="row">
		<div class="col s3 input-field">
			<input id="gallon-boil-volume" class="small" type="number" min="0.1" max="200" step="0.1" bind:value="{$store.gallonBoilVolume}" />
			<label for="gallon-boil-volume">Boil volume (gal)</label>
		</div>
		<div class="col s3 input-field">
			<input id="gallon-target-volume" class="small" type="number" min="0.1" max="200" step="0.1" bind:value="{$store.gallonTargetVolume}" />
			<label for="gallon-target-volume">Target volume (gal)</label>
		</div>
		<div class="col s3 input-field">
			<input id="target-gravity" class="small" type="number" min="0.0" max="2.0" step="0.001" bind:value="{$store.targetGravity}" />
			<label for="target-gravity">Target gravity</label>
		</div>
	</div>
	<div class="row">
		<h5>Hop additions</h5>
	</div>
	<form class="row" on:submit|preventDefault="{addHop}">
		<div class="col s3 input-field">
			<input id="ounce-quantity" class="small" type="number" min="0.01" max="50.00" step="0.01" bind:value="{ounceQuantity}" />
			<label for="ounce-quantity">Quantity (oz)</label>
		</div>
		<div class="col s3 input-field">
			<input id="percentage-aa" class="small" type="number" min="0.1" max="80" step="0.1" bind:value="{percentageAA}" />
			<label for="percentage-aa">AA (%)</label>
		</div>
		<div class="col s3 input-field">
			<input id="minute-boil-time" class="small" type="number" min="1" max="180" step="1" bind:value="{minuteBoilTime}" />
			<label for="minute-boil-time">Boil time (minutes)</label>
		</div>
		<div class="col s3 input-field">
			<button class="btn waves-effect waves-light" type="submit">Add<i class="material-icons right">add</i></button>
		</div>
	</form>
	<table class="row">
		<thead>
			<th></th>
			<th>Quantity</th>
			<th>AA</th>
			<th>AAUs</th>
			<th>Boil time</th>
			<th>IBUs</th>
		</thead>
		<tbody>
			{#each $store.hops as hop, index}
				<tr>
					<td><button class="btn waves-effect waves-light" type="button" on:click="{e => storeDeleteHop(index)}"><i class="material-icons">delete</i></button></td>
					<td>{hop.ounceQuantity} oz</td>
					<td>{hop.percentageAA} %</td>
					<td>{(computeAAUs(hop)).toFixed(2)}</td>
					<td>{hop.minuteBoilTime} min</td>
					<td>{(computeIBUs($store.gallonBoilVolume, $store.gallonTargetVolume, $store.targetGravity, hop)).toFixed(0)} IBUs</td>
				</tr>
			{/each}
			<tr class="pink lighten-5 result">
				<td>Total</td>
				<td>{$ounceQuantityTotal} oz</td>
				<td></td>
				<td>{($aausTotal).toFixed(2)} AAUs</td>
				<td></td>
				<td>{($ibusTotal).toFixed(0)} IBUs</td>
			</tr>
		</tbody>
	</table>
</div>
