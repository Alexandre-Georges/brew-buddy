
<script>
	import { store, dmeToLmeLmeAmount, dmeToLmeDmeAmount } from '../data/dme-lme-conversion-store';
</script>

<div class="col s12">
	<div class="row">
		<h4>DME - LME Conversion</h4>
	</div>
	<form class="row" on:submit|preventDefault>
		<div class="col s6 input-field">
			<input id="dlc-dme-to-lme-dme-amount" class="small" type="number" min="0.1" max="200" step="0.1" bind:value="{$store.dmeToLmeDmeAmount}" />
			<label for="dlc-dme-to-lme-dme-amount">DME Amount</label>
		</div>
		<div class="col s6 input-field pink lighten-5 result">
			<input id="dlc-dme-to-lme-lme-amount" class="small" type="number" disabled bind:value="{$dmeToLmeLmeAmount}"/>
			<label for="dlc-dme-to-lme-lme-amount">LME Amount</label>
		</div>
	</form>
	<form class="row" on:submit|preventDefault>
		<div class="col s6 input-field">
			<input id="dlc-lme-to-dme-lme-amount" class="small" type="number" min="0.1" max="200" step="0.1" bind:value="{$store.dmeToLmeLmeAmount}" />
			<label for="dlc-lme-to-dme-lme-amount">LME Amount</label>
		</div>
		<div class="col s6 input-field pink lighten-5 result">
			<input id="dlc-lme-to-dme-dme-amount" class="small" type="number" disabled bind:value="{$dmeToLmeDmeAmount}"/>
			<label for="dlc-lme-to-dme-dme-amount">DME Amount</label>
		</div>
	</form>
</div>