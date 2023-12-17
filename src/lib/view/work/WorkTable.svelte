<script>
    import { onMount } from 'svelte';
	import workData from './workData.json';
	const works = workData.work;
	export let extraStyle = 'selling-table-wrap';
	export let defaultTable = 'table--default';

</script>

<div class="{extraStyle} table-responsive">
	<table class="table {defaultTable} table-borderless">
		<thead>
			<tr>				
			    <th>번호</th>
				<th>작업명</th>
				<th>담당자</th>
				<th>마감일</th>
                <th>생성일</th>
                <th>상태</th>
			</tr>
		</thead>
		<tbody>
			{#each works as data}
				<tr>
					<td>{data.key}</td>
					<td>{data.workName}</td>
					<td>{data.name}</td>
					<td>{data.endtDate}</td>
                    <td>{data.startDate}</td>
                    <td>{data.state}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
<style lang="scss">
	@import '../../../assets/sass/mixins/media-queries';
	@import '../../../assets/sass/mixins/functions';
	@import '../../../assets/sass/components/table';

	:global{
.top-selling-product{
			.card-body{
				padding: 0 0 15px 0;
			}
		}
	};
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
        }
    }
.row-chose{
    display: flex;
}

</style>