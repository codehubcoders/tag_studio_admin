<script>
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";

  export let extraStyle = "selling-table-wrap";
  export let defaultTable = "table--default";

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
  } from "sveltestrap";

  let username = "";
  let name = "";
  let mobile = "";
  let password = "";
  let isActive = true;
  let isSuper = false;

  const apiHost = "https://tagstudioapi.codehub.codes";
  // const apiHost = "http://localhost:3000";

  const onSubmit = async () => {
    if (!username || !name || !mobile || !password) {
      return;
    }

    const token = localStorage.getItem("token");

    await fetch(`${apiHost}/worker/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        username,
        name,
        mobile,
        password,
        isActive,
        isSuper,
      }),
    });

    alert("저장되었습니다.");
    goto("/worker");
  };
</script>

<Col lg={10}>
  <Card class="card-horizontal card-default card-md mb-4 mt-20 pb-20">
    <CardHeader>
      <h6>작업자관리 - 상세</h6>
    </CardHeader>
    <CardBody class="py-md-30">
      <div class="horizontal-form">
        <Form>
          <Row class="mb-25 form-group">
            <Col sm={3} class="d-flex aling-items-center">
              <Label
                for="username"
                class="col-form-label color-dark fs-14 fw-500 align-center"
                >아이디</Label
              >
            </Col>
            <Col sm={9}>
              <Input
                type="text"
                class="form-control ih-medium ip-gray radius-xs b-light px-15"
                id="username"
                placeholder=""
                bind:value={username}
              />
            </Col>
          </Row>
          <Row class="mb-25">
            <Col sm={3} class="d-flex aling-items-center">
              <Label
                for="name"
                class="col-form-label  color-dark fs-14 fw-500 align-center"
                >이름</Label
              >
            </Col>
            <Col sm={9}>
              <Input
                type="text"
                class="form-control  ih-medium ip-gray radius-xs b-light px-15"
                id="name"
                placeholder=""
                bind:value={name}
              />
            </Col>
          </Row>
          <Row class="mb-25">
            <Col sm={3} class="d-flex aling-items-center">
              <Label
                for="mobile"
                class="col-form-label  color-dark fs-14 fw-500 align-center"
                >연락처</Label
              >
            </Col>
            <Col sm={9}>
              <Input
                type="int"
                class="form-control  ih-medium ip-gray radius-xs b-light px-15"
                id="mobile"
                placeholder=""
                bind:value={mobile}
              />
            </Col>
          </Row>
          <Row class="mb-25">
            <Col sm={3} class="d-flex aling-items-center">
              <Label
                for="password"
                class="col-form-label  color-dark fs-14 fw-500 align-center"
                >비밀번호</Label
              >
            </Col>
            <Col sm={9}>
              <Input
                type="password"
                class="form-control  ih-medium ip-gray radius-xs b-light px-15"
                id="password"
                placeholder=""
                bind:value={password}
              />
            </Col>
          </Row>
          <Row class="mb-25">
            <Col sm={3} class="d-flex aling-items-center">
              <Label
                for="isActive"
                class="col-form-label  color-dark fs-14 fw-500 align-center"
                >활성화</Label
              >
            </Col>
            <Col sm={9}>
              <div class="custom-switch-wrap d-flex align-items-center">
                <Input
                  id="isActive"
                  class="form-switch-primary  form-switch-lg"
                  bind:checked={isActive}
                  type="switch"
                  label=""
                />
              </div>
            </Col>
          </Row>
          <Row class="mb-0">
            <Col sm={3}>
              <Label
                for="isSuper"
                class=" col-form-label  color-dark fs-14 fw-500 align-center"
                >슈퍼관리자</Label
              >
            </Col>
            <Col sm={9}>
              <div class="checkbox-theme-1 custom-checkbox check-all mb-10">
                <Input
                  id="isSuper"
                  class="checkbox form-check-undo"
                  bind:checked={isSuper}
                  type="checkbox"
                  label="슈퍼관리자"
                />
              </div>
              <div class="layout-button mt-25">
                <Button
                  color="primary"
                  size="default"
                  class="btn-squared px-30 fs-13"
                  on:click={onSubmit}>저장</Button
                >
              </div>
            </Col>
          </Row>
        </Form>
      </div>
    </CardBody>
  </Card>
</Col>

<style lang="scss">
  @import "../../../assets/sass/mixins/media-queries";
  @import "../../../assets/sass/components/table";
  @import "../../../assets/sass/mixins/functions";

  :global {
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
