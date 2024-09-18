import React, { Component } from 'react'
import { FaBars } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'

import style from './NavbarComponent.module.css'

export class NavbarComponent extends Component {
	render() {
		return (
			<div>
				<div className='container'>
					<nav className={`${style['nav']}`}>
						<Link to='/' className={`${style['logo']}`}>
							logo
						</Link>
						<div className={`${style['nav-list-wrapper']}`}>
							<ul>
								<li>
									<NavLink to='/'>Home</NavLink>
								</li>
								<li>
									<NavLink to='/about'>About us</NavLink>
								</li>
								<li>
									<NavLink to='/portfolio'>Portfolio</NavLink>
								</li>
								<li>
									<NavLink to='/news'>News</NavLink>
								</li>
							</ul>
							<li className={`${style['contact-btn']}`}>
								<NavLink to='/contact'>Contact us</NavLink>
							</li>
						</div>
						<button className={`${style['close-btn']}`}>
							<FaBars size={24} color='red' />
						</button>
					</nav>
				</div>
			</div>
		)
	}
}

export default NavbarComponent
