import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<a href="/" class={style.logo}>
		<img src="../../assets/ycem-logo.svg" alt="YCEM Logo" height="48" width="48" />
			<h1>Your Choice in Engineering Matters</h1>
		</a>
		<nav>
			<Link activeClassName={style.active} href="/">
				Home
			</Link>
			<Link activeClassName={style.active} href="/about">
				About
			</Link>
			<Link activeClassName={style.active} href="/get-involve">
				Get Involve
			</Link>
			<Link activeClassName={style.active} href="/events">
				Events
			</Link>
			<Link activeClassName={style.active} href="/contact-us">
				Contact us
			</Link>
		</nav>
	</header>
);

export default Header;
