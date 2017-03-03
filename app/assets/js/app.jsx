
const React = require('react');
const Carousel = require('./components/carousel.jsx');
const data = require('../../data/carousel.js');
const ReactDOM = require('react-dom');

console.log(data);

let App = class App extends React.Component {
	render() {
		return (
			<div className="wrapper">

							<div className="row">
								<div className="col-md-12">
									<header>

											<h1><img src="./assets/img/large-yusufla.jpg" /></h1>
											<ul className="social">
													<li className="youtube">
														<a href="https://www.youtube.com/channel/UC5LaNOGZqaHXY69LZMRB6OQ">
															<img src="./assets/img/icons/youtube.png"/>
														</a>
													</li>
													<li className="facebook">
														<a href="https://www.facebook.com/yusuflamusic/">
															<img src="./assets/img/icons/facebook.png" />
														</a>
													</li>
													<li className="twitter">
														<a href="https://twitter.com/yusuflatheband">
															<img src="./assets/img/icons/twitter.png" />
														</a>
													</li>
													<li className="soundcloud">
														<a href="https://soundcloud.com/yusuflamusic">
															<img src="./assets/img/icons/soundcloud.png" />
														</a>
													</li>
													<li className="bandcamp">
														<a href="https://yusuflamusic.bandcamp.com/">
															<img src="./assets/img/icons/bandcamp.png" />
														</a>
													</li>
											</ul>
									</header>

									<nav>
										<ul>
											<li>
												<a href="/">HOME</a>
												</li>
											<li>
												<a href="/">LISTEN</a>
											</li>
											<li>
												<a href="/">LIVE</a>
											</li>
											<li>
												<a href="mailto:rhyswork@gmail.com">BOOK</a>
											</li>
										</ul>
									</nav>
								</div>
							</div>

						<div className="row">
							<div className="hero">
								<img src="./assets/img/gigtime2.jpg" />
							</div>
						</div>

						<div className="row">
						<div className="card half black livedates">
								<h2>live. <img src="./assets/img/listen.png" /></h2>
									<ul>
									<li>17 MARCH <span className="bluesoft">/-/</span> Sofar Sounds (Secret Venue)</li>
									<li>25 MARCH <span className="bluesoft">/-/</span> George & Dragon, Hackney</li>
									<li>28 MARCH <span className="bluesoft">/-/</span> The Bird's Nest, Deptford</li>
									<li>20 MARCH <span className="bluesoft">/-/</span> Juju's Bar, Brick Lane</li>
									</ul>
						</div>

						<div className="card half newsletter">
							<a className="twitter-timeline" data-height="320" data-chrome="nofooter noheader transparent" href="https://twitter.com/yusuflatheband">Tweets by yusuflatheband</a> 			
						</div>
					</div>


						<div className="row card listen">
							<iframe width="100%" height="450" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/145674817&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
						</div>

			</div>

		)
	}
};

ReactDOM.render(
	<App />,
	document.getElementById('page-content')
);
