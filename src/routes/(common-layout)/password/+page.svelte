<script>
	import { Row, Col, Card, CardHeader, CardBody, Form, FormGroup, Input, Label,Button } from 'sveltestrap';
</script>
<Card class="card-horizontal card-default card-md mb-4 mt-20">
	<CardHeader>
		<h6>비밀번호 재설정</h6>
	</CardHeader>
	<CardBody class="py-md-30">
<div class="horizontal-form">
<Form>
	<Row class="form-group">
		<Col sm={3} class="d-flex aling-items-center">
			<Label
				for="비밀번호재설정"
				class=" col-form-label color-dark fs-13 fw-500 align-center">새로운 비밀번호</Label
			>
		</Col>
		<Col sm={5}>
			<Input
				type="text"
				class="form-control ih-medium ip-light radius-xs b-light px-15"
				id="inputPassword"
			/>
		</Col>
	</Row>
    <Row class="form-group mt-20">
		<Col sm={3} class="d-flex aling-items-center">
			<Label
				for="비밀번호재설정"
				class=" col-form-label color-dark fs-13 fw-500 align-center">비밀번호 재입력</Label>
		</Col>
		<Col sm={5}>
			<Input
				type="text"
				class="form-control ih-medium ip-light radius-xs b-light px-15"
				id="inputPassword"
			/>
		</Col>
	</Row>
        <Row class="form-group mt-20">
		<Col sm={3} class="d-flex aling-items-center">
			<Label
				for="비밀번호재설정"
				class=" col-form-label color-dark fs-13 fw-500 align-center"></Label>
		</Col>
		<Col sm={5}>
	<Button primary class="btn-default btn-squared radius-xs fs-13 fw-400 text-capitalize">
         비밀번호 변경</Button>
		</Col>
	</Row>
</Form>
</div>
<div class="price_action d-flex py-15">

</div>
</CardBody>
</Card>

