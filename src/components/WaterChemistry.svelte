
<script>
	import {
		store,
		oAlkanity,
		tAlkanity,
		oResidualAlkanity,
		tResidualAlkanity,
		waterChem,
	} from '../data/water-chemistry-store';
</script>

<div class="col s12">
	<div class="row">
		<h4>Water Chemistry</h4>
	</div>
	<form class="row" on:submit|preventDefault>
		<div class="col s12">
			<div class="row">
				<div class="col s4 input-field">
					<input id="wc-gallon-volume" class="small" type="number" min="0.1" max="100" step="0.1" bind:value="{$store.gallonVolume}" />
					<label for="wc-gallon-volume">Volume (gallons)</label>
				</div>
			</div>
			<div class="row">
				<h5>Available Salts</h5>
			</div>
			<div class="row">
				<div class="col s3">
					<label for="wc-avail-caco3">
						<input id="wc-avail-caco3" type="checkbox" class="filled-in" bind:checked="{$store.hasCaco3}" />
						<span>Calcium Carbonate - CaCO<sub>3</sub></span>
					</label>
				</div>
				<div class="col s3">
					<label for="wc-avail-nahco3">
						<input id="wc-avail-nahco3" type="checkbox" class="filled-in" bind:checked="{$store.hasNahco3}" />
						<span>Sodium Bicarbonate - NaHCO<sub>3</sub></span>
					</label>
				</div>
				<div class="col s3">
					<label for="wc-avail-caoh2">
						<input id="wc-avail-caoh2" type="checkbox" class="filled-in" bind:checked="{$store.hasCaoh2}" />
						<span>Calcium Hydroxide - Ca(OH)<sub>2</sub></span>
					</label>
				</div>
				<div class="col s3">
					<label for="wc-avail-naoh">
						<input id="wc-avail-naoh" type="checkbox" class="filled-in" bind:checked="{$store.hasNaoh2}" />
						<span>Sodium Hydroxide - NaOH<sub>2</sub></span>
					</label>
				</div>
				<div class="col s3">
					<label for="wc-avail-caso4">
						<input id="wc-avail-caso4" type="checkbox" class="filled-in" bind:checked="{$store.hasCaso4}" />
						<span>Calcium Sulfate - CaSO<sub>4</sub></span>
					</label>
				</div>
				<div class="col s3">
					<label for="wc-avail-mgso4">
						<input id="wc-avail-mgso4" type="checkbox" class="filled-in" bind:checked="{$store.hasMgso4}" />
						<span>Magnesium Sulfate - MgSO<sub>4</sub></span>
					</label>
				</div>
				<div class="col s3">
					<label for="wc-avail-cacl2">
						<input id="wc-avail-cacl2" type="checkbox" class="filled-in" bind:checked="{$store.hasCacl2}" />
						<span>Calcium Chloride - CaCl<sub>2</sub></span>
					</label>
				</div>
				<div class="col s3">
					<label for="wc-avail-mgcl2">
						<input id="wc-avail-mgcl2" type="checkbox" class="filled-in" bind:checked="{$store.hasMgcl2}" />
						<span>Magnesium Chloride - MgCl<sub>2</sub></span>
					</label>
				</div>
				<div class="col s3">
					<label for="wc-avail-nacl">
						<input id="wc-avail-nacl" type="checkbox" class="filled-in" bind:checked="{$store.hasNacl}" />
						<span>Sodium Chloride - NaCl</span>
					</label>
				</div>
			</div>
			<div class="row">
				<h5>Water Chemistry (ppm or mg/L)</h5>
			</div>
			<table class="row">
        <thead>
          <tr>
						<th></th>
						<th>Calcium - Ca<sup>+2</sup></th>
						<th>Magnesium - Mg<sup>+2</sup></th>
						<th>Sulfate - SO<sub>4</sub><sup>-2</sup></th>
						<th>Sodium - NA<sup>+</sup></th>
						<th>Chloride - Cl<sup>-</sup></th>
						<th>Bicarbonate - HCO<sub>3</sub><sup>-</sup></th>
						<th>Alkanity as CaCO<sub>3</sub></th>
						<th>Residual Alkanity as CaCO<sub>3</sub></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Before</td>
            <td><input class="small" type="number" min="0.0" max="300.0" step="0.1" bind:value="{$store.oCa}" /></td>
            <td><input class="small" type="number" min="0.0" max="300.0" step="0.1" bind:value="{$store.oMg}" /></td>
            <td><input class="small" type="number" min="0.0" max="300.0" step="0.1" bind:value="{$store.oSo}" /></td>
            <td><input class="small" type="number" min="0.0" max="300.0" step="0.1" bind:value="{$store.oNa}" /></td>
            <td><input class="small" type="number" min="0.0" max="300.0" step="0.1" bind:value="{$store.oCl}" /></td>
            <td><input class="small" type="number" min="0.0" max="300.0" step="0.1" bind:value="{$store.oHco}" /></td>
            <td>{$oAlkanity}</td>
            <td>{$oResidualAlkanity}</td>
          </tr>
          <tr>
            <td>Target</td>
            <td><input class="small" type="number" min="0.0" max="300.0" step="0.1" bind:value="{$store.tCa}" /></td>
            <td><input class="small" type="number" min="0.0" max="300.0" step="0.1" bind:value="{$store.tMg}" /></td>
            <td><input class="small" type="number" min="0.0" max="300.0" step="0.1" bind:value="{$store.tSo}" /></td>
            <td><input class="small" type="number" min="0.0" max="300.0" step="0.1" bind:value="{$store.tNa}" /></td>
            <td><input class="small" type="number" min="0.0" max="300.0" step="0.1" bind:value="{$store.tCl}" /></td>
            <td><input class="small" type="number" min="0.0" max="300.0" step="0.1" bind:value="{$store.tHco}" /></td>
            <td>{$tAlkanity}</td>
            <td>{$tResidualAlkanity}</td>
          </tr>
          <tr>
            <td>After</td>
            <td>{$waterChem.water.ca}</td>
            <td>{$waterChem.water.mg}</td>
            <td>{$waterChem.water.so}</td>
            <td>{$waterChem.water.na}</td>
            <td>{$waterChem.water.cl}</td>
            <td>{$waterChem.water.hco}</td>
            <td>{$waterChem.water.alkanity}</td>
            <td>{$waterChem.water.residualAlkanity}</td>
          </tr>
        </tbody>
      </table>
			<div class="row">
				<h5>Salt additions</h5>
			</div>
			<div class="row">
				<div class="col s3 input-field pink lighten-5 result">
					<input id="wc-add-caco3" class="small" type="number" disabled bind:value="{$waterChem.salts.caco3}" />
					<label for="wc-add-caco3">Calcium Carbonate - CaCO<sub>3</sub> (g)</label>
				</div>
				<div class="col s3 input-field pink lighten-5 result">
					<input id="wc-add-nahco3" class="small" type="number" disabled bind:value="{$waterChem.salts.nahco3}" />
					<label for="wc-add-nahco3">Sodium Bicarbonate - NaHCO<sub>3</sub> (g)</label>
				</div>
				<div class="col s3 input-field pink lighten-5 result">
					<input id="wc-add-caoh2" class="small" type="number" disabled bind:value="{$waterChem.salts.caoh2}" />
					<label for="wc-add-caoh2">Calcium Hydroxide - Ca(OH)<sub>2</sub> (g)</label>
				</div>
				<div class="col s3 input-field pink lighten-5 result">
					<input id="wc-add-naoh" class="small" type="number" disabled bind:value="{$waterChem.salts.naoh2}" />
					<label for="wc-add-naoh">Sodium Hydroxide - NaOH<sub>2</sub> (g)</label>
				</div>
				<div class="col s3 input-field pink lighten-5 result">
					<input id="wc-add-caso4" class="small" type="number" disabled bind:value="{$waterChem.salts.caso4}" />
					<label for="wc-add-caso4">Calcium Sulfate - CaSO<sub>4</sub> (g)</label>
				</div>
				<div class="col s3 input-field pink lighten-5 result">
					<input id="wc-add-mgso4" class="small" type="number" disabled bind:value="{$waterChem.salts.mgso4}" />
					<label for="wc-add-mgso4">Magnesium Sulfate - MgSO<sub>4</sub> (g)</label>
				</div>
				<div class="col s3 input-field pink lighten-5 result">
					<input id="wc-add-cacl2" class="small" type="number" disabled bind:value="{$waterChem.salts.cacl2}" />
					<label for="wc-add-cacl2">Calcium Chloride - CaCl<sub>2</sub> (g)</label>
				</div>
				<div class="col s3 input-field pink lighten-5 result">
					<input id="wc-add-mgcl2" class="small" type="number" disabled bind:value="{$waterChem.salts.mgcl2}" />
					<label for="wc-add-mgcl2">Magnesium Chloride - MgCl<sub>2</sub> (g)</label>
				</div>
				<div class="col s3 input-field pink lighten-5 result">
					<input id="wc-add-nacl" class="small" type="number" disabled bind:value="{$waterChem.salts.nacl}" />
					<label for="wc-add-nacl">Sodium Chloride - NaCl (g)</label>
				</div>
			</div>
		</div>
	</form>
</div>
