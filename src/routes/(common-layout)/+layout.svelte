<script>
	import { onMount, afterUpdate } from 'svelte';
	import LogoArea from '../../lib/components/header/LogoArea.svelte';
	import NavAuthor from '../../lib/components/header/NavAuthor.svelte';
	import Sidebar from '../../lib/components/sidebar/Sidebar.svelte';
	import Footer from '../../lib/components/footer/Footer.svelte';
	import { Spinner } from 'sveltestrap';
	import { getItem } from '$lib/utility/localStorageController';
	// import { inlineSvg } from '$lib/components/utilities/utilities';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

</script>

<svelte:head>
	<title>태그스튜디오 관리자</title>
</svelte:head>


	<header class="header-top">
		<nav class="navbar navbar-light">
			<div class="navbar-left">
				<LogoArea />
			</div>
			<div class="navbar-right">
				<ul class="navbar-right__menu">
					<li class="nav-author"><NavAuthor /></li>
				</ul>
			</div>
		</nav>
	</header>

	<main class="main-content">
		<Sidebar />
		<div class="contents">
			<slot />
		</div>
		<Footer />
	</main>


<style lang="scss">
	:global {
		@import '../../assets/sass/style.scss';
	}

</style>
