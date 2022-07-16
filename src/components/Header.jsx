import React from 'react';
import '.././App.css';
import { Navbar, NavbarBrand } from 'reactstrap';

class Header extends React.Component {
	render() {
		return (
			<div>
				<Navbar color="primary">
					<div className="nav-container" id="brand">
						Foto App
					</div>
				</Navbar>
			</div>
		);
	}
}

export default Header;