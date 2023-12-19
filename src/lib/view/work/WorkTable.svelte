<script>
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";
  import { DateTime } from "luxon";

  export let extraStyle = "selling-table-wrap";
  export let defaultTable = "table--default";

  const apiHost = "https://tagstudioapi.codehub.codes";
  // const apiHost = "http://localhost:3000";

  let works = [];
  let token = "";

  function goToEdit(id) {
    localStorage.setItem("workId", id);
    goto(`/work/editwork`);
  }

  onMount(() => {
    token = localStorage.getItem("token") || "";

    fetch(`${apiHost}/work/list`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then(async (response) => {
      works = await response.json();
    });
  });
</script>

<div class="{extraStyle} table-responsive">
  <table class="table {defaultTable} table-borderless">
    <thead>
      <tr>
        <th>번호</th>
        <th>작업명</th>
        <th>담당자</th>
        <th>주문일</th>
        <th>출하일</th>
        <th>메모</th>
      </tr>
    </thead>
    <tbody>
      {#each works as data}
        <tr on:click={() => goToEdit(data.id)}>
          <td>{data.id}</td>
          <td>{data.name}</td>
          <td>{data.admin.name}</td>
          <td
            >{DateTime.fromJSDate(new Date(data.orderDate)).toFormat(
              "yyyy.MM.dd",
            )}</td
          >
          <td
            >{data.shippingDate
              ? DateTime.fromJSDate(new Date(data.shippingDate)).toFormat(
                  "yyyy.MM.dd",
                )
              : ""}</td
          >
          <td>{data.memo}</td>
        </tr>
      {/each}
    </tbody>
  </table>
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
