<script>
  import WorkerTable from "../../../lib/view/worker/workerTable.svelte";
  import {
    Container,
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
  import { goto } from "$app/navigation";
  import { get, writable } from "svelte/store";
  import { onMount, setContext } from "svelte";

  let willShowInactive = false;

  export const showInactive = writable();
  $: showInactive.set(false);
  setContext('showInactive', showInactive);

  export const selectedWorker = writable();
  $: selectedWorker.set(0);
  setContext('selectedWorker', selectedWorker);

  async function viewCheckbox() {
    showInactive.set(!willShowInactive);
  }

  function addmember() {
    goto(`/worker/addmember`);
  }
</script>

<div class="component-page mb-25">
  <Container fluid>
    <Card class="card-horizontal card-default card-md mb-4 mt-20">
      <CardHeader>
        <h6>작업자 관리</h6>
        <Button
          color="secondary"
          size="sm"
          class="btn-squired mx-20 fw-500"
          on:click={addmember}>추가</Button
        >
      </CardHeader>
      <CardBody class="">
        <div class="checkbox-theme-1 custom-checkbox check-all mb-10">
          <Input
            class="checkbox form-check-undo"
            bind:checked={willShowInactive}
            on:change={viewCheckbox}
            type="checkbox"
            label="비활성화 작업자 보기"
          />
        </div>
        <WorkerTable />
      </CardBody>
    </Card>
  </Container>
</div>

<style lang="scss">
  :global {
    @import "../../../../src/assets/sass/mixins/media-queries";
    @import "../../../../src/assets/sass/mixins/functions";

    .card .card-header {
      display: flex;
      justify-content: normal;
    }
    .form-check {
      padding-left: 0em;
    }
    .custom-checkbox input[type="checkbox"] + label {
      font-size: 12px;
      padding-top: 2px;
    }
  }
</style>
