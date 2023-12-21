<script>
    import KpiTable from "../../../lib/view/kpi/KpiTable.svelte";
	import { Row, Col, Card, CardHeader, CardBody, Form, FormGroup, Input, Label,Button } from 'sveltestrap';

</script>

<Card class="card-horizontal card-default card-md mb-4 mt-20">
	<CardHeader>
		<h6>KPI [P]</h6>
	</CardHeader>
	<CardBody class="">
        <KpiTable />
    </CardBody>
</Card>

<style lang="scss">
	:global {
		@import '../../../../src/assets/sass/mixins/media-queries';
		@import '../../../../src/assets/sass/mixins/functions';

        .card .card-header {
            display: flex;
            justify-content: normal;
        }
        .form-check {
            padding-left: 0em;
        }

    }
</style>
