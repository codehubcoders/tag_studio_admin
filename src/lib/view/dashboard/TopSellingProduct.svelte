<script>
	import { Card, CardHeader, CardBody } from 'sveltestrap';
	import CardExtra from '../../components/cards/CardExtra.svelte';
	import topSaleData from './dashboardChartContent.json';
	import TopSellingProduct from '../../components/tables/TopSellingProduct.svelte';
	const topSales = topSaleData.topSale;
	let period = 'today';
	let currentTab = 'today';
	let dataPeriod = topSales[period];
	// function changeData(data) {
	// 	dataPeriod = topSales[data];
	// 	currentTab = data;
	// }
</script>

<Card class="border-0 px-25 top-selling-product">
	<CardHeader class="px-0 border-0">
		<h6>내 작업</h6>

	</CardHeader>
	<CardBody class="">
		<TopSellingProduct {dataPeriod} />
	</CardBody>
</Card>
