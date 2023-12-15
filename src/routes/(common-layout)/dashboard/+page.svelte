<script>
	import { Container, Row, Col } from 'sveltestrap';
	import { Card, CardHeader, CardBody } from 'sveltestrap';
	// import OverviewCards from '../../../lib/components/cards/OverviewCards.svelte';
	// import overviewCardData from '@data/overviewCard.json';
	// import TotalLineChart from '@view/dashboard/demoOne/TotalLineChart.svelte';
	// import SalesGrowth from '@view/dashboard/demoOne/SalesGrowth.svelte';
	// import SalesByLocation from '@view/dashboard/demoOne/SalesByLocation.svelte';
	// import TopSellingProduct from '../../../lib/view/dashboard/TopSellingProduct.svelte';
	import MyWorkTable from '../../../lib/view/dashboard/MyWork.svelte';
	import MyOderTable from '../../../lib/view/dashboard/MyOrder.svelte';
	import EstimateTable from '../../../lib/view/dashboard/Estimate.svelte';
	import CertificationTable from '../../../lib/view/dashboard/Certification.svelte';
	// import BrowserState from '@view/dashboard/demoOne/BrowserState.svelte';

	// const overviewDataSorted = overviewCardData.slice(0, 4);


</script>

<svelte:head>
	<title>Dashboard</title>
</svelte:head>

<div class="crm mb-25">
	<Container fluid>
		<Row>
			<Col xxl={6} lg={6} class="mb-25 mt-20">
				<Card class="border-0 px-25 top-selling-product">
					<CardHeader class="px-0 border-0">
						<h6>내 작업</h6>
					</CardHeader>
				<CardBody class="">
					<MyWorkTable />
					</CardBody>
				</Card>
			</Col>

			<Col xxl={6} lg={6} class="mb-25 mt-20">
				<Card class="border-0 px-25 top-selling-product">
					<CardHeader class="px-0 border-0">
						<h6>내 주문</h6>
					</CardHeader>
				<CardBody class="">
					<MyOderTable />
					</CardBody>
				</Card>
			</Col>

		</Row>
				<Row>

			<Col xxl={6} lg={6} class="mb-25 mt-20">
				<p class="tableTitle">요청된 견적서</p>
				<Card class="border-0 px-25 pt-20  top-selling-product">
				<CardBody>
					<EstimateTable />
					</CardBody>
				</Card>
			</Col>

			<Col xxl={6} lg={6} class="mb-25 mt-20">
			<p class="tableTitle">소속인증 요청</p>
				<Card class="border-0 px-25 pt-20 top-selling-product">
				<CardBody >
					<CertificationTable />
					</CardBody>
				</Card>
			</Col>

		</Row>
	</Container>
</div>
<style lang="scss">
.tableTitle{
	font-size: 12px;
	padding: 5px 10px;;
	background-color: var(--color-primary);
	border-radius: 6px;
	color: white;
}
</style>