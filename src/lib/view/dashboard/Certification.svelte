<script>
	import topSaleData from './dashboardChartContent.json';
	const certificationkData = topSaleData.dashBoard.certification;
	// let dataPeriod = myWorkData[myWork];
	// export let dataPeriod;
	export let extraStyle = 'selling-table-wrap';
	export let defaultTable = 'table--default';
</script>

<div class="{extraStyle} table-responsive">
	<table class="table {defaultTable} table-borderless">
		<thead>
			<tr>
				<th>이름</th>
				<th>소속</th>
				<th>날짜</th>
			</tr>
		</thead>
		<tbody>
			{#each certificationkData as data}
				<tr>
					<td>
						<div class="selling-product-img d-flex align-items-center">

							<span>{data.name}</span>
						</div>
					</td>
					<td>{data.Membership}</td>
					<td>{data.date}</td>
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
			}

			&:last-child {
				padding-right: 15px;
			}
		}

		.table--default tr td {
			&:first-child {
				padding-left: 0;
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

			tr th {
				&:first-child {
					border-radius: 6px 0 0 6px;
					text-align: left !important;
				}

				&:last-child {
					border-radius: 0 6px 6px 0;
				}
			}
		}
		.selling-product-img {
			img {
				margin-right: 10px;
				width: 30px;
				height: 30px;
				border-radius: 5px;
			}

			span {
				color: var(--color-dark);
				font-size: 14px;
				font-weight: 500;
				line-height: lh(15px, 20px);
				@include ssm {
					padding-right: 15px;
				}
			}

			&--2 {
				img {
					width: 25px;
					height: 25px;
					border-radius: 0;
					object-fit: contain;
				}
			}
		}
	}
</style>
