<script>
    import { onMount } from 'svelte';

	export let extraStyle = 'selling-table-wrap';
	export let defaultTable = 'table--default';
	let printerData = [];
	let skip = 0;
	let take = 20;

	const apiHost = 'https://tagstudioapi.codehub.codes';

	onMount(async () => {
		const response = await fetch(`${apiHost}/printerData?skip=${skip}&take=${take}`);
		printerData = await response.json();
	});

	async function updateProductAmount(id, newAmount) {
        await fetch(`${apiHost}/productAmount/${id}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ productAmount: newAmount })
        });
    }

	function handleAmountChange(data, event) {
        const newAmount = event.target.value;
        updateProductAmount(data.id, newAmount);
    }
</script>

<div class="{extraStyle} table-responsive">
	<table class="table {defaultTable} table-borderless">
		<thead>
			<tr>				
				<th>출력시간</th>
				<th>소요시간</th>
				<th>파일</th>
				<th style="min-width: 120px">갯수</th>
			</tr>
		</thead>
		<tbody>
			{#each printerData as data}
				<tr>
					<td>{new Date(data.createdDate).toLocaleString()}</td>
					<td>{data.duration}초</td>
					<td>{data.imagePath}</td>
					<td>
						<input type="number" class="form-control" value={data.productAmount} on:blur={event => handleAmountChange(data, event)} />
                    </td>
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
