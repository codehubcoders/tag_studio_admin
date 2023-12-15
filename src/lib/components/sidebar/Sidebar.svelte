<script>
	import { onMount } from 'svelte';
	import { Svroller } from 'svrollbar';
	import { page } from '$app/stores';
	import { direction } from '../../store/direction.js';


	onMount(() => {
	
		/* sidebar scroll to active link on page load */
		const activeLink = document.querySelector('.sidebar_nav .menu-item a.active');
		if (activeLink !== null) {
			const activeLinkOffset = activeLink.offsetTop;
			document.querySelector('.svlr-viewport').scrollTop = activeLinkOffset;
		}

		//collapse sidebar if window is < 991px
		if (window.innerWidth < 991) {
			mainSidebar.classList.add('sidebar--collapsed');
		}
	});

	function handleLayoutDirecction(e, direction) {
		e.preventDefault();

		document.documentElement.setAttribute('dir', direction);
		if (direction === 'rtl') {
			document.getElementById('bootstrap-css-link').href = '../css/bootstrap.rtl.min.css';
		} else {
			document.getElementById('bootstrap-css-link').href = '../css/bootstrap.min.css';
		}
	}


</script>

<aside class="sidebar">
	<Svroller width="100%" height="100%">
		<div class="sidebar__menu-group">
			<ul class="sidebar_nav">
			 <li class="menu-item">
					<a href={'/dashboard'}>
						<span class="nav-icon uil uil-create-dashboard" />
						<span class="menu-text">Dashboard</span>
					</a>
				</li>
			<li class="menu-item">
				<a href="/worker">
					<span class="nav-icon uil uil-users-alt" />
					<span class="menu-text">작업자 관리</span>
				</a>
			</li>
			<li class="menu-item">
				<a href="/template">
					<span class="nav-icon uil uil-apps" />
					<span class="menu-text">템플릿 관리</span>
				</a>
			</li>
			<li class="menu-item">
				<a href="/order">
					<span class="nav-icon uil uil-clipboard-alt" />
					<span class="menu-text">주문 관리</span>
				</a>
			</li>
			<li class="menu-item">
				<a href="/work">
					<span class="nav-icon uil uil-edit" />
					<span class="menu-text">작업 관리</span>
				</a>
			</li>
			<li class="menu-item">
				<a href="/customer">
					<span class="nav-icon uil uil-headphones" />
					<span class="menu-text">고객 관리</span>
				</a>
			</li>
			<li class="menu-item">
				<a href="/estimate">
					<span class="nav-icon uil uil-grid" />
					<span class="menu-text">견적서 관리</span>
				</a>
			</li>
			<li class="menu-item">
				<a href="/kpi">
					<span class="nav-icon uil uil-airplay" />
					<span class="menu-text">KPI</span>
				</a>
			</li>
			<li class="menu-item">
				<a href="/google">
					<span class="nav-icon uil uil-chart" />
					<span class="menu-text">구글통계</span>
				</a>
			</li>
			</ul>
		</div>
	</Svroller>
</aside>

<style lang="scss">
	:global {
		@import '../../../assets/sass/mixins/directional.scss';
		@import './style.scss';

		$dir: ltr;
	}
</style>
