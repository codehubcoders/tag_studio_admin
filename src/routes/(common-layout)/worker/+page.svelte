<script>
    import WorkerTable from "../../../lib/view/worker/workerTable.svelte";
	import { Row, Col, Card, CardHeader, CardBody, Form, FormGroup, Input, Label,Button } from 'sveltestrap';
    import { goto } from '$app/navigation';

    let isDisableView = true;

    function viewCheckbox() {
     isDisableView = !isDisableView; 
    }

    function addmember() {
     goto(`/worker/addmember`);
    }

</script>

<Card class="card-horizontal card-default card-md mb-4 mt-20">
	<CardHeader>
		<h6>작업자 관리</h6>
        	<Button color="secondary" size="sm" class="btn-squired mx-20 fw-500"
			on:click={addmember}
            
            >추가</Button>
	</CardHeader>
	<CardBody class="">
    	<div class="checkbox-theme-1 custom-checkbox check-all mb-10">
			<Input class="checkbox form-check-undo" 
            bind:checked={isDisableView} 
            on:change={viewCheckbox}
            type="checkbox" 
            label="비활성화 작업자 보기" />
		</div>
        <WorkerTable />
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
        .custom-checkbox input[type=checkbox]+label{
            font-size: 12px;
            padding-top: 2px;
        }


    }
</style>