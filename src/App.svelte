<script>
	import MaltExtracts from './components/MaltExtracts.svelte';
	import DmeLmeConversion from './components/DmeLmeConversion.svelte';
	import ConcentratedGravity from './components/ConcentratedGravity.svelte';
	import WaterChemistry from './components/WaterChemistry.svelte';
	import GravityCorrection from './components/GravityCorrection.svelte';
	import MaltPoints from './components/MaltPoints.svelte';
	import HopBittering from './components/HopBittering.svelte';
	import YeastAttenuation from './components/YeastAttenuation.svelte';
	import AlcoholVolume from './components/AlcoholVolume.svelte';
	import PrimingSugar from './components/PrimingSugar.svelte';
</script>

<div class="container">
	<div class="row">
		<div class="col s12 card grey lighten-5">
			<div class="card-content">
				<h3>Brew Buddy</h3>
				<div class="row">
					<DmeLmeConversion></DmeLmeConversion>
				</div>
				<div class="row">
					<MaltPoints></MaltPoints>
				</div>
				<div class="row">
					<ConcentratedGravity></ConcentratedGravity>
				</div>
				<div class="row">
					<WaterChemistry></WaterChemistry>
				</div>
				<div class="row">
					<GravityCorrection></GravityCorrection>
				</div>
				<div class="row">
					<MaltExtracts></MaltExtracts>
				</div>
				<div class="row">
					<HopBittering></HopBittering>
				</div>
				<div class="row">
					<YeastAttenuation></YeastAttenuation>
				</div>
				<div class="row">
					<AlcoholVolume></AlcoholVolume>
				</div>
				<div class="row">
					<PrimingSugar></PrimingSugar>
				</div>
			</div>
		</div>
	</div>
</div>
