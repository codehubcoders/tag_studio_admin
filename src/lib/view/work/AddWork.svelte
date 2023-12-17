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
		Button,
        Dropdown,
		DropdownItem,
		DropdownMenu,
		DropdownToggle,
	} from 'sveltestrap';

    import DatePicker from '@beyonk/svelte-datepicker/src/components/DatePicker.svelte';
    import dayjs from 'dayjs';
    import 'dayjs/locale/ko';

    dayjs.locale('ko');
    let selectedDate;
</script>

<Col lg={10}>
	<Card class="card-horizontal card-default card-md mb-4 mt-20 pb-10">
		<CardHeader>
			<h6>작업관리 - 수동생성</h6>
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
						<Col sm={5}>
							<Input
								type="text"
								class="form-control ih-medium ip-gray radius-xs b-light px-15"
								id="inputId"
								placeholder=""
							/>
						</Col>
					</Row>
					<Row class="mb-25 form-group">
						<Col sm={3} class="d-flex aling-items-center">
							<Label for="inputId" class=" col-form-label color-dark fs-14 fw-500 align-center"
								>담당자</Label
							>
						</Col>
						<Col sm={9}>
                            <Dropdown class="dropdown-hover rounded-3">
                                <DropdownToggle nav class="p-0">
                                    선택
                                    <img class="svg" alt="" src={'/img/svg/chevron-down.svg'} />
                                </DropdownToggle>

                                <DropdownMenu class="dropdown-default">
                                    <DropdownItem href={'#'}>담당자A</DropdownItem>
                                    <DropdownItem href={'#'}>담당자B</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
						</Col>
					</Row>
                    <Row class="mb-25 form-group">
						<Col sm={3} class="d-flex aling-items-center">
							<Label for="inputId" class=" col-form-label color-dark fs-14 fw-500 align-center"
								>마감일<span>(필수아님)</span></Label
							>
						</Col>
						<Col sm={9}>
						<div class="custom-date-picker custom-date-picker__bottom custom-date-picker__lg">
							<div class="form-group mb-0 form-group-calender">
								<div class="position-relative">
									<DatePicker 
                                        format="YYYY.MM.DD"
                                        bind:value={selectedDate}
                                        placeholder ="날짜선택"/>
								</div>
							</div>
						</Col>
					</Row>
                    <Row class="mb-10 form-group">
						<Col sm={3} class="d-flex aling-items-center">

						</Col>
						<Col sm={9}>
							<div class="layout-button">
								<Button color="primary" size="default" class="btn-squared px-30 fs-13">수동생성</Button>
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
	@import '../../../assets/sass/mixins/functions';
	@import '../../../assets/sass/components/table';

	:global{

        .form-control{
            padding: 10px 0;
        }
        .dropdown-hover{
            border : 1px solid var(--border-light) !important;
            padding: 10.5px 15px;
            margin: 0px;
            width: 100px;
            a{
                color: var(--color-light);
                font-size: 13px;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
        }
        .custom-date-ranger.custom-date-ranger__lg .datepicker .calendar-button, .custom-date-picker.custom-date-picker__lg .datepicker .calendar-button {
          padding: 10.5px 10px;
          border : 1px solid var(--border-light) !important;
          font-size: 13px;
          width: 40%;
          }
    }

</style>