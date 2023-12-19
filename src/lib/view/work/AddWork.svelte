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
  import { Textarea } from "svelte-forms-lib";
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";

  dayjs.locale("ko");

  let adminList = [];
  let selectedAdmin;
  const workData = {
    name: "",
    folderPath: "",
    adminId: null,
    orderDate: null,
    memo: "",
  };

  // const apiHost = "https://tagstudioapi.codehub.codes";
  const apiHost = "http://localhost:3000";

  onMount(async () => {
    const token = localStorage.getItem("token") || "";

    const response = await fetch(`${apiHost}/worker/list?showInactive=false`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    adminList = await response.json();
  });

  const onClickAdmin = (admin) => {
    workData.adminId = admin.id;
    selectedAdmin = admin;
  };

  const onSubmit = async () => {
    if (!workData.adminId || !workData.name || !workData.orderDate) {
      return;
    }
    const token = localStorage.getItem("token") || "";

    await fetch(`${apiHost}/work/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ ...workData }),
    });

    alert("저장되었습니다.");
    goto("/work");
  };
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
              <Label
                for="inputId"
                class=" col-form-label color-dark fs-14 fw-500 align-center"
                >작업명</Label
              >
            </Col>
            <Col sm={5}>
              <Input
                bind:value={workData.name}
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
                for="folder_path"
                class=" col-form-label color-dark fs-14 fw-500 align-center"
                >작업폴더경로</Label
              >
            </Col>
            <Col sm={5}>
              <Input
                bind:value={workData.folderPath}
                type="text"
                class="form-control ih-medium ip-gray radius-xs b-light px-15"
                id="folder_path"
                placeholder=""
              />
            </Col>
          </Row>
          <Row class="mb-25 form-group">
            <Col sm={3} class="d-flex aling-items-center">
              <Label
                for="inputId"
                class=" col-form-label color-dark fs-14 fw-500 align-center"
                >담당자</Label
              >
            </Col>
            <Col sm={9}>
              <Dropdown class="dropdown-hover rounded-3">
                <DropdownToggle nav class="p-0">
                  {workData.adminId ? selectedAdmin.name : "선택"}
                  <img class="svg" alt="" src={"/img/svg/chevron-down.svg"} />
                </DropdownToggle>

                <DropdownMenu class="dropdown-default">
                  {#each adminList as data}
                    <DropdownItem
                      value={data.id}
                      on:click={() => onClickAdmin(data)}
                      >{data.name}</DropdownItem
                    >
                  {/each}
                </DropdownMenu>
              </Dropdown>
            </Col>
          </Row>
          <Row class="mb-25 form-group">
            <Col sm={3} class="d-flex aling-items-center">
              <Label
                class=" col-form-label color-dark fs-14 fw-500 align-center"
                >주문일</Label
              >
            </Col>
            <Col sm={9}>
              <div
                class="custom-date-picker custom-date-picker__bottom custom-date-picker__lg"
              >
                <div class="form-group mb-0 form-group-calender">
                  <div class="position-relative">
                    <DatePicker
                      bind:selected={workData.orderDate}
                      format="YYYY.MM.DD"
                      placeholder="날짜선택"
                    />
                  </div>
                </div>
              </div></Col
            >
          </Row>
          <Row class="mb-25 form-group">
            <Col sm={3} class="d-flex aling-items-center">
              <Label
                for="memo"
                class=" col-form-label color-dark fs-14 fw-500 align-center"
                >메모</Label
              >
            </Col>
            <Col sm={5}>
              <textarea
                bind:value={workData.memo}
                rows="5"
                class="form-control ih-medium ip-gray radius-xs b-light px-15"
                id="memo"
                placeholder=""
              />
            </Col>
          </Row>
          <Row class="mb-10 form-group">
            <Col sm={3} class="d-flex aling-items-center"></Col>
            <Col sm={9}>
              <div class="layout-button">
                <Button
                  on:click={onSubmit}
                  color="primary"
                  size="default"
                  class="btn-squared px-30 fs-13">수동생성</Button
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
