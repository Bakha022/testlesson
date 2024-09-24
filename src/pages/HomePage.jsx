import React, { Component, Fragment } from 'react'
import Info from '../components/home/Info'
import RecentProjects from '../components/home/RecentProjects'
import Devices from '../components/home/Devices'
import HomeHero from '../components/HomeHero/HomeHero'
import TrandingGames from '../components/TrandingGames/TrandingGames'
import CallOfDuty from '../components/CallOfDuty/CallOfDuty'

export class HomePage extends Component {
	render() {
		return (
			<Fragment>
				<HomeHero />
				<TrandingGames />
				<CallOfDuty />
				<Devices />
				<RecentProjects />

				<Info />

			</Fragment>
		)
	}
}

export default HomePage
