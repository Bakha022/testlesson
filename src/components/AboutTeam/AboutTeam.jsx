import React, { Component } from 'react'

import TeamCard from '../card/TeamCard'
import styles from './AboutTeam.module.css'
export class AboutTeam extends Component {
	render() {
		let { teamMembers } = this.props
		return (
			<div className={`container ${styles['about__team--container']} `}>
				<h2 className={styles['about__team--title']}>Our Team</h2>
				<div className={styles['about__team--row']}>
					{teamMembers.map(member => (
						<TeamCard key={member.id} {...member} />
					))}
				</div>
			</div>
		)
	}
}

export default AboutTeam
