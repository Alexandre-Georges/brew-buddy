<script>
	import {
		store,
		addMalt as storeAddMalt,
		deleteMalt as storeDeleteMalt,
		computePoints,
		pointDensityTotal,
		ounceQuantityTotal,
	} from '../data/malt-extracts-store';

	let ounceQuantity = 1;
	let pointDensity = 40;

	function addMalt() {
		if (ounceQuantity > 0 && pointDensity > 0) {
			storeAddMalt({ ounceQuantity, pointDensity });
		}
	}

</script>

<div class="col s12">
	<div class="row">
		<h4>Malt Extracts</h4>
	</div>
	<form class="row" on:submit|preventDefault="{addMalt}">
		<div class="col s4 input-field">
			<input id="me-ounce-quantity" class="small" type="number" min="0.01" max="50.00" step="0.01" bind:value="{ounceQuantity}" />
			<label for="me-ounce-quantity">Quantity (oz)</label>
		</div>
		<div class="col s4 input-field">
			<input id="me-point-density" class="small" type="number" min="0.1" max="500" step="0.1" bind:value="{pointDensity}" />
			<label for="me-point-density">Density (pts per oz)</label>
		</div>
		<div class="col s4 input-field">
			<button class="btn waves-effect waves-light" type="submit">Add<i class="material-icons right">add</i></button>
		</div>
	</form>
	<table class="row">
		<thead>
			<th></th>
			<th>Quantity</th>
			<th>Density</th>
			<th>Points</th>
		</thead>
		<tbody>
			{#each $store.malts as malt, index}
				<tr>
					<td><button class="btn waves-effect waves-light" type="button" on:click="{e => storeDeleteMalt(index)}"><i class="material-icons">delete</i></button></td>
					<td>{malt.ounceQuantity} oz</td>
					<td>{malt.pointDensity} pts/oz</td>
					<td>{computePoints(malt)} pts</td>
				</tr>
			{/each}
			<tr class="pink lighten-5 result">
				<td>Total</td>
				<td>{$ounceQuantityTotal} oz</td>
				<td></td>
				<td>{$pointDensityTotal} pts</td>
			</tr>
		</tbody>
	</table>
</div>
