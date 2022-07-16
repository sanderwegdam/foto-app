import React from 'react';
import '.././App.css';
import { Navbar } from "react-bootstrap"

class Header extends React.Component {
	render() {
		return (
			<div>
				<Navbar sticky="top">
					Foto App
				</Navbar>
			</div>
		);
	}
}

export default Header;