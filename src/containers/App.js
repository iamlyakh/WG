import React, {Component} from 'react';
import {IndexLink, Link} from 'react-router';

export default class App extends Component {
	render() {
		return <div className='wg-page'>
			<header className='wg-page__header wg-header'>
				<div className='wg-header__logo'>WG TEST</div>
				<ul className='wg-header__menu wg-menu'>
					<li className='wg-menu__item'>
						<IndexLink to='/' className='wg-menu-link' activeClassName='wg-menu-link_active'>Игроки</IndexLink>
					</li>
					<li className='wg-menu__item'>
						<Link to='/compare' className='wg-menu-link' activeClassName='wg-menu-link_active'>Сравнить</Link>
					</li>
				</ul>
			</header>
			<div className='wg-page__content'>
			{
				this.props.children
			}
			</div>
		</div>
	}
}
