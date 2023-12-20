<script>
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";
  import { DateTime } from "luxon";
  import { Col, Pagination, PaginationItem, PaginationLink, Row } from "sveltestrap";

  export let extraStyle = "selling-table-wrap";
  export let defaultTable = "table--default";

  const apiHost = "https://tagstudioapi.codehub.codes";
  // const apiHost = "http://localhost:3000";

  let works = [];
  let token = "";
  let pages = [];
  let skip = 0;
  let take = 20;

  let growth = 'upward';
  let growthRate = 0;
  let growthValue = 0;

  function goToEdit(id) {
    localStorage.setItem("workId", id);
    goto(`/work/editwork`);
  }

  onMount(async () => {
    token = localStorage.getItem("token") || "";

    let response = await fetch(`${apiHost}/work/list?skip=${skip}&take=${take}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    works = await response.json();

    response = await fetch(`${apiHost}/work/count`, {
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

    response = await fetch(`${apiHost}/work/average`, {
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

  const onSelectPage = async (page) => {
    skip = page - 1 === 0 ? 0 : (page - 1) * take;

    const token = localStorage.getItem("token");

    const response = await fetch(`${apiHost}/work/list?skip=${skip}&take=${take}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    works = await response.json();
  };
</script>

<div class="{extraStyle} table-responsive">
  <table class="table {defaultTable} table-borderless">
    <thead>
      <tr>
        <th>번호</th>
        <th>주문번호</th>
        <th>납기일</th>
        <th>원명</th>
        <th>주문일</th>
        <th>시안확정</th>
        <th>출하일</th>
        <th>원아수(제품수량)</th>
        <th>작업단계_A(누끼)</th>
        <th>작업단계_B(캐릭터)</th>
        <th>작업단계_C(바닥각인)</th>
        <th>디자인타입</th>
        <th>시안발송 담당자</th>
        <th>시안수정사항(메모)</th>
        <th>제작_A;UV인쇄</th>
        <th>제작_B;바닥 버닝</th>
        <th>담당자 전화</th>
        <th>배송주소</th>
        <th>택배송장번호</th>
      </tr>
    </thead>
    <tbody>
      {#each works as data}
        <tr on:click={() => goToEdit(data.id)}>
          <td>{data.id}</td>
          <td>{data.orderName}</td>
          <td>
            { data.shippingDate ? DateTime.fromJSDate(new Date(data.shippingDate)).diff(DateTime.fromJSDate(new Date(data.orderDate)), 'days').days : "" }
          </td>
          <td>{data.customer}</td>
          <td>
            {data.orderDate
              ? DateTime.fromJSDate(new Date(data.orderDate)).toFormat(
                  "yyyy.MM.dd",
                )
              : ""}
          </td>
          <td>
            {data.confirmDate
              ? DateTime.fromJSDate(new Date(data.confirmDate)).toFormat(
                  "yyyy.MM.dd",
                )
              : ""}
          </td>
          <td>
            {data.shippingDate
              ? DateTime.fromJSDate(new Date(data.shippingDate)).toFormat(
                  "yyyy.MM.dd",
                )
              : ""}
          </td>
          <td>{data.qty}</td>
          <td>{data.actionA}</td>
          <td>{data.actionB}</td>
          <td>{data.actionC}</td>
          <td>{data.designType}</td>
          <td>{data.responsible}</td>
          <td>{data.memo}</td>
          <td>{data.procedureA}</td>
          <td>{data.procedureB}</td>
          <td>{data.contact}</td>
          <td>{data.address}</td>
          <td>{data.trackingNumber}</td>
        </tr>
      {/each}
    </tbody>
  </table>

  <Row>
    <Col md={6}>
      최근한달 평균:
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
</div>

<style lang="scss">
  @import "../../../assets/sass/mixins/media-queries";
  @import "../../../assets/sass/mixins/functions";
  @import "../../../assets/sass/components/table";

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
    .table--default tr {
      &:hover {
        cursor: pointer !important;
        background-color: var(--bg-lighter);
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
    }
  }
  .row-chose {
    display: flex;
  }
</style>
