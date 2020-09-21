import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const activeStyle = {
	color: 'green',
};

export default function Header() {
	return (
		<header className="container">
			<nav
				className="navbar navbar-expand-lg navbar-light py-0"
				style={{ backgroundColor: '#f705ab' }}
			>
				<Link className="navbar-brand" to="/">
					<img alt="Women's Heaven" src="/images/logo.png" />
				</Link>

				<div className="collapse navbar-collapse" id="navbarNav">
					<NavLink
						className="nav-item black-col pl-3 "
						activeStyle={activeStyle}
						to="/dress"
					>
						<h3>Dress</h3>
					</NavLink>
				</div>
				<div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
					<NavLink
						className="nav-item ml-auto float-right black-col pr-4"
						activeStyle={activeStyle}
						to="/cart"
					>
						<FontAwesomeIcon icon={faShoppingCart} />
					</NavLink>
				</div>
			</nav>
		</header>
	);
}
