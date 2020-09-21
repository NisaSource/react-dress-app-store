import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Route } from 'react-router-dom';
import App from './App';
import ErrorBoundary from './ErrorBoundary';
import { CartProvider } from './hooks/cartContext';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
	<ErrorBoundary>
		<Route>
			<CartProvider>
				<App />
			</CartProvider>
		</Route>
	</ErrorBoundary>,
	document.getElementById('root')
);
