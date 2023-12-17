<script>
	import {
		Col,
		Button,
		Dropdown,
		DropdownItem,
		DropdownMenu,
		DropdownToggle,
        Row
	} from 'sveltestrap';


    import DatePicker from '@beyonk/svelte-datepicker/src/components/DatePicker.svelte';
    import dayjs from 'dayjs';
    import 'dayjs/locale/ko';

    dayjs.locale('ko');
    let selectedDate;
</script>
<Row>
<Col md={5}>
<div class="row-chose">
	<div class="search-result global-shadow rounded-3 bg-white">
		<form action="/" class="d-flex align-items-center justify-content-between">
			<div class=" d-flex align-items-center w-200  ps-25 pe-sm-25 pe-0 py-1">
				<img class="svg" alt="" src={'/img/svg/search.svg'} />
				<input
					class="form-control border-0 box-shadow-none"
					type="search"
					placeholder=""
					aria-label="Search"
				/>
			</div>
			<button
				type="button"
				class="border-0 bg-transparent px-15 color-primary fw-400 hover-opacity-btn fs-13">검색</button
			>
		</form>
	</div>
    		<Dropdown class="dropdown-hover mx-10 rounded-3">
				<DropdownToggle nav class="p-0">
					선택
					<img class="svg" alt="" src={'/img/svg/chevron-down.svg'} />
				</DropdownToggle>

				<DropdownMenu class="dropdown-default">
					<DropdownItem href={'#'}>생성일</DropdownItem>
					<DropdownItem href={'#'}>마감일</DropdownItem>
				</DropdownMenu>
			</Dropdown>
     </div>
</Col>

<Col md={5}>
			<div class="date-picker-list ">
				<div
							class="custom-date-ranger custom-date-ranger__bottom custom-date-ranger__lg position-relative d-flex align-items-center"
						>
					<div class="form-group mb-0">
						<DatePicker 
                        format="YYYY.MM.DD"
                        bind:value={selectedDate}
                        placeholder ="날짜선택"/>
					</div>
					<span class="divider px-10">-</span>
					<div class="form-group mb-0">
						<DatePicker 
                        format="YYYY.MM.DD"
                        bind:value={selectedDate}
                         placeholder ="날짜선택" />
					</div>
				</div>
			</div>
</Col>
</Row>
<style lang="scss">
	@import '../../../assets/sass/mixins/media-queries';
	@import '../../../assets/sass/mixins/functions';
	@import '../../../assets/sass/components/table';

	:global{
        .search-result{
            border : 1px solid var(--border-light) !important;
            width: 100%;
        }
        .svg{
            width: 20px !important;
        }

        .dropdown-hover{
            border : 1px solid var(--border-light) !important;
            padding: 10.5px 15px;
            margin: 0px;
            width: 100px;
            a{
                color: var(--color-light);
                font-size: 13px;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
        }
        .custom-date-ranger.custom-date-ranger__lg .datepicker .calendar-button, .custom-date-picker.custom-date-picker__lg .datepicker .calendar-button {
          padding: 10.5px 10px;
          border : 1px solid var(--border-light) !important;
          font-size: 13px;
          }
    }
.row-chose{
    display: flex;
}

</style>