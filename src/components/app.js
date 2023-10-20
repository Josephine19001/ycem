import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import Home from '../routes/home';
import About from '../routes/about'
import GetInvolve from '../routes/get-involve'
import Events from '../routes/events'
import ContactUs from '../routes/contact-us'

const App = () => (
	<div id="app">
		<Header />
		<main>
			<Router>
				<Home path="/" />
				<About path='/what-we-do' />
				<GetInvolve path='/get-involve' />
				<Events path='/events' />
				<ContactUs path='/contact-us' />
			</Router>
		</main>
	</div>
);

export default App;
