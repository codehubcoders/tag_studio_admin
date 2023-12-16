<script>
	import { goto } from '$app/navigation';
	import { setItem } from '../../utility/localStorageController';

	const handleSignOut = (event) => {
		event.preventDefault();
		setItem('user', '');
		setItem('loggedin', false);
		setItem('access_token', '');
		goto(`/signin`);
	};
	const passwordSetting = () => {
		goto(`/password`);
	};
</script>

<div class="dropdown-custom">
	<a href={'#'} class="nav-item-toggle">
		<img src="/img/author-nav.png" alt="" class="rounded-circle" />
		<span class="nav-item__title">김태그<i class="las la-angle-down nav-item__arrow" /></span>
	</a>
	<div class="dropdown-parent-wrapper">
		<div class="dropdown-wrapper">
			<div class="nav-author__info">
				<div class="author-img">
					<img src="/img/author-nav.png" alt="" class="rounded-circle" />
				</div>
				<div>
					<h6>김태그</h6>
					<span>슈퍼관리자</span>
				</div>
			</div>
			<div class="nav-author__options">
				<ul>
					<li>
						<a href={'#'}  on:click={passwordSetting}> <i class="uil uil-setting" /> 비밀번호 재설정</a>
					</li>
				</ul>
				<a href={'#'} class="nav-author__signout" on:click={(event) => handleSignOut(event)}>
					<i class="uil uil-sign-out-alt" /> 로그아웃</a
				>
			</div>
		</div>
		<!-- ends: .dropdown-wrapper -->
	</div>
</div>
