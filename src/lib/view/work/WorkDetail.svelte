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
  } from "sveltestrap";

  import DatePicker from "@beyonk/svelte-datepicker/src/components/DatePicker.svelte";
  import dayjs from "dayjs";
  import "dayjs/locale/ko";

  dayjs.locale("ko");
  let selectedDate;

  import DesignChat from "./DesignChat.svelte";
  import WorkList from "./WorkList.svelte";
</script>

<Row>
  <Col sm={7}>
    <Card class="card-horizontal card-default card-md mb-2 mt-20 pb-10">
      <CardHeader>
        <h6>작업관리 - 상세</h6>
      </CardHeader>
      <CardBody class="py-md-30">
        <div class="horizontal-form">
          <Form>
            <Row class="mb-25 form-group">
              <Col sm={3} class="d-flex aling-items-center">
                <Label
                  for="inputId"
                  class=" col-form-label color-dark fs-14 fw-500 align-center"
                  >작업명</Label
                >
              </Col>
              <Col sm={8}>
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
                <Label
                  for="folder"
                  class=" col-form-label color-dark fs-14 fw-500 align-center"
                  >폴더링크</Label
                >
              </Col>
              <Col sm={9} class="d-flex aling-items-center">
                <Label
                  for="folder"
                  class=" col-form-label color-info fs-13 fw-500 align-center"
                  ><a href="">폴더 링크</a></Label
                >
                <button
                  type="button"
                  class="border-0 px-15 mx-10 radius-xs bg-primary color-white fw-400 fs-13"
                  >링크</button
                >
              </Col>
            </Row>
            <Row class="mb-25 form-group">
              <Col sm={3} class="d-flex aling-items-center">
                <Label
                  class=" col-form-label color-dark fs-14 fw-500 align-center"
                  >담당자</Label
                >
              </Col>
              <Col sm={9}>
                <Dropdown class="dropdown-hover rounded-3">
                  <DropdownToggle nav class="p-0">
                    선택
                    <img class="svg" alt="" src={"/img/svg/chevron-down.svg"} />
                  </DropdownToggle>

                  <DropdownMenu class="dropdown-default">
                    <DropdownItem href={"#"}>담당자A</DropdownItem>
                    <DropdownItem href={"#"}>담당자B</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </Col>
            </Row>
            <Row class="mb-25 form-group">
              <Col sm={3} class="d-flex aling-items-center">
                <Label
                  for="endDate"
                  class=" col-form-label color-dark fs-14 fw-500 align-center"
                  >마감일</Label
                >
              </Col>
              <Col sm={9}>
                <div
                  class="custom-date-picker custom-date-picker__bottom custom-date-picker__lg"
                >
                  <div class="form-group mb-0 form-group-calender">
                    <div class="position-relative">
                      <DatePicker
                        id="endDate"
                        format="YYYY.MM.DD"
                        bind:value={selectedDate}
                        placeholder="날짜선택"
                        continueText="선택"
                      />
                    </div>
                  </div>
                </div></Col
              >
            </Row>
            <Row class=" form-group">
              <Col sm={3} class="d-flex aling-items-center">
                <Label
                  for="design"
                  class=" col-form-label color-dark fs-14 fw-500 align-center"
                  >시안</Label
                >
              </Col>
              <Col sm={9} class="d-flex aling-items-center">
                <Label
                  for="design"
                  class=" col-form-label color-dark fs-14 fw-500 align-center"
                  >미확정</Label
                >
              </Col>
            </Row>
          </Form>
        </div>
      </CardBody>
    </Card>
  </Col>

  <Col sm={5}>
    <Card class="card-horizontal card-default card-md mb-4 mt-20 pb-10">
      <CardBody class="py-md-30">
        <Col sm={9} class="d-flex aling-items-center">
          <p class=" col-form-label color-dark fs-14 fw-500 align-center">
            작업로그
          </p>
        </Col>
        <Col sm={9} class="">
          <p class=" col-form-label color-dark fs-12 fw-400 align-center">
            2023.12.15 11:20 주문접수
          </p>
          <p class=" col-form-label color-dark fs-12 fw-400 align-center">
            2023.12.15 11:20 주문접수
          </p>
        </Col>
      </CardBody>
    </Card>
  </Col>
</Row>

<Col sm={12}>
  <Card class="mb-10">
    <CardBody class="py-md-30">
      <DesignChat />
    </CardBody>
  </Card>
</Col>

<Col sm={12}>
  <Card>
    <CardBody class="py-md-30">
      <WorkList />
    </CardBody>
  </Card>
</Col>

<style lang="scss">
  @import "../../../assets/sass/mixins/media-queries";
  @import "../../../assets/sass/mixins/functions";
  @import "../../../assets/sass/components/table";

  :global {
    .form-control {
      padding: 10px 0;
    }
    .dropdown-hover {
      border: 1px solid var(--border-light) !important;
      padding: 10.5px 15px;
      margin: 0px;
      width: 100px;
      a {
        color: var(--color-light);
        font-size: 13px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }

    .custom-date-ranger.custom-date-ranger__lg .datepicker .calendar-button,
    .custom-date-picker.custom-date-picker__lg .datepicker .calendar-button {
      padding: 10.5px 10px;
      border: 1px solid var(--border-light) !important;
      font-size: 13px;
      width: 40%;
    }
  }
</style>
