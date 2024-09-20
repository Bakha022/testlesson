import React, { Component } from 'react'
import ServicesHeader from '../components/servicesHeader/ServicesHeader'
import ServicesAbout from '../components/servicesabout/ServicesAbout.module'
import ServicesPosts from '../components/ServicesPosts/ServicesPosts'
import ServicesSwiper from '../components/ServicesSwiper/ServicesSwiper';

export class Portfolio extends Component {
	render() {
		return (

			<div style={{
				background: "linear-gradient(177.34deg, #070320 46.05%, #05119D 50.67%, #2351F5 92.85%)"
			}} className="portfolio-page">
				<div className="container">
					<ServicesHeader />
					<ServicesAbout />
					<ServicesPosts />
				</div>
					<ServicesSwiper />
			</div>

		);

	}
}

export default Portfolio