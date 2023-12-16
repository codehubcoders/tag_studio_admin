<script>
	import {
		Row,
		Col,
		Card,
		CardHeader,
		CardBody,
		Form,
		FormGroup,
		Input,
		Label,
		Button
	} from 'sveltestrap';

	import workerData from './workerData.json';
	const workers = workerData.workers;

    let isDisableView = workers.disable;
    function viewCheckbox() {
     isDisableView = !isDisableView; 
    }

    let isSuper = workers.super;
    function viewSwich() {
     isSuper = !isSuper; 
    }

</script>

<Col lg={10}>
	<Card class="card-horizontal card-default card-md mb-4 mt-20 pb-20">
		<CardHeader>
			<h6>작업관리 - 상세</h6>
		</CardHeader>
		<CardBody class="py-md-30">
			<div class="horizontal-form">
				<Form>
					<Row class="mb-25 form-group">
						<Col sm={3} class="d-flex aling-items-center">
							<Label for="inputId" class=" col-form-label color-dark fs-14 fw-500 align-center"
								>아이디</Label
							>
						</Col>
						<Col sm={9}>
							<Input
								type="text"
								class="form-control ih-medium ip-gray radius-xs b-light px-15"
								id="inputId"
								placeholder=""
							/>
						</Col>
					</Row>
					<Row class="mb-25">
						<Col sm={3} class="d-flex aling-items-center">
							<Label
								for="inputPassword"
								class="col-form-label  color-dark fs-14 fw-500 align-center">이름</Label
							>
						</Col>
						<Col sm={9}>
							<Input
								type="text"
								class="form-control  ih-medium ip-gray radius-xs b-light px-15"
								id="inputPassword"
								placeholder=""
							/>
						</Col>
					</Row>
					<Row class="mb-25">
						<Col sm={3} class="d-flex aling-items-center">
							<Label
								for="inputPhone"
								class="col-form-label  color-dark fs-14 fw-500 align-center">연락처</Label
							>
						</Col>
						<Col sm={9}>
							<Input
								type="int"
								class="form-control  ih-medium ip-gray radius-xs b-light px-15"
								id="inputPhone"
								placeholder=""
							/>
						</Col>
					</Row>
                    <Row class="mb-25">
						<Col sm={3} class="d-flex aling-items-center">
							<Label
								for="inputPassword"
								class="col-form-label  color-dark fs-14 fw-500 align-center">비밀번호</Label
							>
						</Col>
						<Col sm={9}>
							<Input
								type="password"
								class="form-control  ih-medium ip-gray radius-xs b-light px-15"
								id="inputPassword"
								placeholder=""
							/>
						</Col>
					</Row>
                    <Row class="mb-25">
						<Col sm={3} class="d-flex aling-items-center">
							<Label
								for=""
								class="col-form-label  color-dark fs-14 fw-500 align-center">활성화</Label
							>
						</Col>
						<Col sm={9}>
                    	<div class="custom-switch-wrap d-flex align-items-center">
                        	<Input id="c4" 
                            class="form-switch-primary  form-switch-lg" 
                            bind:checked={isSuper}
                            on:change={viewSwich}
                            type="switch" 
                            label="" 
                            />
                        </div>
						</Col>
					</Row>
                    <Row class="mb-0">
						<Col sm={3}>
							<Label
								for=""
								class=" col-form-label  color-dark fs-14 fw-500 align-center">슈퍼관리자</Label
							>
						</Col>
						<Col sm={9}>
                            <div class="checkbox-theme-1 custom-checkbox check-all mb-10">
                                <Input class="checkbox form-check-undo" 
                                bind:checked={isDisableView} 
                                on:change={viewCheckbox}
                                type="checkbox" 
                                label="슈퍼관리자" />
                            </div>
							<div class="layout-button mt-25">
								<Button color="primary" size="default" class="btn-squared px-30 fs-13">저장</Button>
							</div>
						</Col>
					</Row>
				</Form>
			</div>
		</CardBody>
	</Card>
</Col>


<style lang="scss">
	@import '../../../assets/sass/mixins/media-queries';
	@import '../../../assets/sass/components/table';
	@import '../../../assets/sass/mixins/functions';

	:global{
    .form-switch-primary.form-switch-lg.form-check {
            margin-left: 0em !important;
                padding-left: 0em;
    }

       .checkbox.form-check-undo.form-check {
            padding-left: 0em !important; 
        }
		.form-switch {

			&.form-switch-lg .form-check-input {
				height: 1.7rem;
				width: calc(3rem + 0.6rem);
				border-radius: 4rem;
                margin-left: 0em !important;
                padding-left: 0em;
			}
		}
	}
</style>