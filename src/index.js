import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './router';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<HashRouter>
		{renderRoutes(routes)}
	</HashRouter>,
	document.getElementById('root')
);
if(module.hot)module.hot.accept()
serviceWorker.unregister();
