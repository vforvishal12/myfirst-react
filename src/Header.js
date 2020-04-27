import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button'


function Header(){

	return (
			<div>
	
				
				<Navbar bg="dark" variant="dark">
		   			 <Navbar.Brand href="#home">Saw News</Navbar.Brand>
					<Nav className="mr-auto">
					  <Nav.Link href="#home">Home</Nav.Link>
					  <Nav.Link href="#Politics">Politics</Nav.Link>
					  <Nav.Link href="#business">Business</Nav.Link>
					  <Nav.Link href="#Sports">Sports</Nav.Link>
					</Nav>
					
		  		</Navbar>					

			</div>
		);
}

export default Header;
	