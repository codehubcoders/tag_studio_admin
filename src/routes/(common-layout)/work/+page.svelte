<script>
  import WorkTable from "../../../lib/view/work/workTable.svelte";
  import WorkTop from "../../../lib/view/work/workTop.svelte";
  import {
    Container,
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    Button,
  } from "sveltestrap";
  import { goto } from "$app/navigation";

  function addwork() {
    goto(`/work/addwork`);
  }
</script>

<div class="component-page mb-25">
  <Container fluid>
    <Card class="card-horizontal card-default card-md mb-4 mt-20">
      <CardHeader>
        <h6>작업 관리</h6>
        <Button
          color="secondary"
          size="sm"
          class="btn-squired mx-20 fw-500"
          on:click={addwork}>작업수동생성</Button
        >
      </CardHeader>
      <!-- <CardBody class="">
        <WorkTop />
      </CardBody> -->
    </Card>
    <Card class="card-horizontal card-default card-md mb-4 mt-20">
      <CardBody class="">
        <WorkTable />
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
  }
</style>
