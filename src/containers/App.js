import React, {Component} from 'react';
import {Link} from 'react-router';

export default class App extends Component {
	render() {
		return <div>
			<header>
				<nav>
					<li>
						<Link to="/" activeClassName="active">User list</Link>
					</li>
					<li>
						<Link to="/compare" activeClassName="active">Compare</Link>
					</li>
				</nav>
			</header>
			<div>{this.props.children}</div>
		</div>
	}
}
