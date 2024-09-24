import React, { Component, Fragment } from 'react'
import Info from '../components/home/Info'
import RecentProjects from '../components/home/RecentProjects'
import Devices from '../components/home/Devices'

export class HomePage extends Component {
	render() {
		return (
			<Fragment>
				<Devices />
				<RecentProjects />

				<Info />

			</Fragment>
		)
	}
}

export default HomePage
