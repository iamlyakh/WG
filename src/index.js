import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import App from './containers/App';
import ComparePage from './containers/ComparePage';
import UserListPage from './containers/UserListPage';
import configureStore from './store/configureStore';
import {Router, IndexRoute, Route, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
	<Provider store={store}>
		<Router history={history}>
			<Route path='/' component={App}>
				<IndexRoute components={UserListPage}/>
				<Route path='compare' component={ComparePage}/>
			</Route>
		</Router>
	</Provider>,
	document.getElementById('root')
);
