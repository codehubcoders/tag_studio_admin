<script>
  import { goto } from "$app/navigation";
  import { getContext, onMount, setContext } from "svelte";
  import { get, writable } from "svelte/store";

  export let extraStyle = "selling-table-wrap";
  export let defaultTable = "table--default";

  const apiHost = "https://tagstudioapi.codehub.codes";
  // const apiHost = "http://localhost:3000";

  const showInactive = getContext("showInactive");
  let workers = [];
  let token = "";

  onMount(() => {
    token = localStorage.getItem("token") || "";

    fetch(`${apiHost}/worker/list?showInactive=${$showInactive}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then(async (response) => {
      workers = await response.json();
    });
  });

  $: {
    if (token.length) {
      fetch(`${apiHost}/worker/list?showInactive=${$showInactive}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }).then(async (response) => {
        workers = await response.json();
      });
    }
  }

  const goToWorker = (id) => {
    localStorage.setItem("workerId", id);
    goto(`/worker/editmember`);
  };
</script>

<div class="{extraStyle} table-responsive">
  <table class="table {defaultTable} table-borderless">
    <thead>
      <tr>
        <th>아이디</th>
        <th>이름</th>
        <th>전화번호</th>
        <th>슈퍼관리자</th>
      </tr>
    </thead>
    <tbody>
      {#each workers as data}
        <tr on:click={() => goToWorker(data.id)}>
          <td>{data.username}</td>
          <td>{data.name}</td>
          <td>{data.mobile}</td>
          <td>{data.isSuper === true ? "Y" : "N"}</td>
        </tr>
      {/each}
    </tbody>
  </table>
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
