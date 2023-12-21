<script>
  import { onMount } from "svelte";
  import { Col, Input, Pagination, PaginationItem, PaginationLink, Row } from "sveltestrap";

  export let extraStyle = "selling-table-wrap";
  export let defaultTable = "table--default";
  let printerData = [];
  let skip = 0;
  let take = 20;
  let pages = [];

  let growth = 'upward';
  let growthRate = 0;
  let growthValue = 0;

  const apiHost = "https://tagstudioapi.codehub.codes";
  // const apiHost = "http://localhost:3000";

  onMount(async () => {
    const token = localStorage.getItem("token");

    let response = await fetch(
      `${apiHost}/printerData?skip=${skip}&take=${take}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
    );
    printerData = await response.json();

    response = await fetch(`${apiHost}/printerDataCount`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    let result = await response.json();
    const total = result.total || 0;
    pages = Array.from(
      { length: Math.ceil(total / take) },
      (_, index) => index + 1,
    );

    response = await fetch(`${apiHost}/averageProduction`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    result = await response.json();
    growthRate = result.rate.toFixed(2);
    growthValue = result.average.toFixed(2);
    growth = result.rate > 0 ? 'upward' : 'downward';
  });

  async function updateProductAmount(id, newAmount) {
    const token = localStorage.getItem("token");

    await fetch(`${apiHost}/productAmount/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ productAmount: newAmount }),
    });
  }

  async function updateIsTest(id, newValue) {
    const token = localStorage.getItem("token");

    await fetch(`${apiHost}/isTest/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ isTest: newValue }),
    });

    const response = await fetch(`${apiHost}/work/average`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const result = await response.json();
    growthRate = result.rate.toFixed(2);
    growthValue = result.average.toFixed(2);
    growth = result.rate > 0 ? 'upward' : 'downward';
  }

  function handleAmountChange(data, event) {
    const newAmount = event.target.value;
    updateProductAmount(data.id, newAmount);

  }
  function handleIsTestChange(data) {
    console.log(data.id, data.isTest)
    updateIsTest(data.id, !data.isTest);
  }

  const onSelectPage = async (page) => {
    skip = page - 1 === 0 ? 0 : (page - 1) * take;

    const token = localStorage.getItem("token");

    const response = await fetch(
      `${apiHost}/printerData?skip=${skip}&take=${take}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
    );
    printerData = await response.json();
  };
</script>

<div class="{extraStyle} table-responsive">
  <table class="table {defaultTable} table-borderless">
    <thead>
      <tr>
        <th>출력시간</th>
        <th>시간당생산</th>
        <th>소요시간</th>
        <th>KPI대상</th>
        <th>파일</th>
        <th>제품수량</th>
      </tr>
    </thead>
    <tbody>
      {#each printerData as data}
        <tr>
          <td>{new Date(data.createdDate).toLocaleString()}</td>
          <td
            >{data.productAmount
              ? (data.productAmount / (data.duration / 3600)).toFixed(2)
              : ""}</td
          >
          <td>{data.duration}초</td>
          <td>
            <div class="custom-switch-wrap d-flex align-items-center">
              <Input
                id="isTest"
                class="form-switch-primary form-switch-lg"
                bind:checked={data.isTest}
                on:change={(event) => handleIsTestChange(data)}
                type="switch"
                label=""
              />
            </div>
          </td>
          <td>{data.fileName}</td>
          <td>
            <input
              type="number"
              class="form-control"
              bind:value={data.productAmount}
              on:blur={(event) => handleAmountChange(data, event)}
            />
          </td>
        </tr>
      {/each}
    </tbody>
  </table>

  <Row>
    <Col md={6}>
      지난 15일 평균 KPI[P] 시간당 생산량 증가분 :
      <span class="growth-status {growth === 'upward' ? 'color-success' : 'color-danger'}">
        {#if growth === 'upward'}
          <span class="uil uil-arrow-up" />
        {:else}
          <span class="uil uil-arrow-down" />
        {/if}
        <strong>{growthRate}%</strong>
        <small>({growthValue})</small>
      </span>
    </Col>
    <Col md={6}>
      <Pagination ariaLabel="Page navigation">
        {#each pages as page}
          <PaginationItem active={(skip === 0 ? 0 : skip / take) + 1 === page}>
            <PaginationLink on:click={() => onSelectPage(page)}
              >{page}</PaginationLink
            >
          </PaginationItem>
        {/each}
      </Pagination>
    </Col>
  </Row>

  <!-- <Pagination ariaLabel="Page navigation">
    {#each pages as page}
      <PaginationItem active={(skip === 0 ? 0 : skip / take) + 1 === page}>
        <PaginationLink on:click={() => onSelectPage(page)}
          >{page}</PaginationLink
        >
      </PaginationItem>
    {/each}
  </Pagination> -->
</div>

<style lang="scss">
  @import "../../../assets/sass/mixins/media-queries";
  @import "../../../assets/sass/components/table";
  @import "../../../assets/sass/mixins/functions";

  :global {
    .top-selling-product {
      .card-body {
        padding: 0 0 15px 0;
      }
    }
  }
  .selling-table-wrap {
    .table--default tbody tr:last-child {
      border-bottom: none;
    }
    .table--default tr th {
      &:first-child {
        padding-left: 15px;
        width: 20px !important;
      }

      &:last-child {
        padding-right: 15px;
      }
    }

    .table--default tr td {
      &:first-child {
        padding-left: 0;
        text-align: center !important;
      }

      &:last-child {
        padding-right: 15px;
      }
    }
    table {
      thead {
        tr {
          background: var(--bg-normal);
        }
      }
    }
    @include lg {
      padding-bottom: 0;
    }

    table {
      tbody {
        td {
          white-space: nowrap;
          font-size: 13px;
          padding: 10px;
          color: var(--color-dark);
          text-align: center !important;
          &:first-child {
            text-align: left !important;
            padding-left: 5px !important;
          }
        }

        tr {
          &:first-child {
            td {
              padding-top: 15px;
            }
          }
        }
      }

      thead {
        tr {
          th {
            font-size: 13px;
            font-weight: 500;
            line-height: 18px;
            color: var(--color-light);
            text-transform: uppercase;
            padding: px 15px;
            text-align: center !important;
          }
        }
      }

      // tr th {
      // 	&:first-child {
      // 		border-radius: 6px 0 0 6px;
      // 		text-align: left !important;
      // 	}

      // 	&:last-child {
      // 		border-radius: 0 6px 6px 0;
      // 	}
      // }
    }
  }
</style>
