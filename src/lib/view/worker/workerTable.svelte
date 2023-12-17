<script>
    import { onMount } from 'svelte';
	import workerData from './workerData.json';
	const workers = workerData.workers;
	export let extraStyle = 'selling-table-wrap';
	export let defaultTable = 'table--default';

</script>

<div class="{extraStyle} table-responsive">
	<table class="table {defaultTable} table-borderless">
		<thead>
			<tr>				
			    <th>번호</th>
				<th>아이디</th>
				<th>이름</th>
				<th>연락처</th>
			</tr>
		</thead>
		<tbody>
			{#each workers as data}
				<tr>
					<td>{data.key}</td>
					<td>{data.id}</td>
					<td>{data.name}</td>
					<td>{data.phone}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style lang="scss">
	@import '../../../assets/sass/mixins/media-queries';
	@import '../../../assets/sass/components/table';
	@import '../../../assets/sass/mixins/functions';

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
