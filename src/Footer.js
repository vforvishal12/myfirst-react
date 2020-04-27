import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Footer(){

let currTime = new Date().toLocaleString();
	return (
<Navbar bg="dark" variant="dark">
  
  
  <Navbar.Collapse>
    <Navbar.Text>
      <a href="#">About Us</a>
    </Navbar.Text>
  </Navbar.Collapse>

  <Navbar.Collapse>
    <Navbar.Text>
      <a href="#">Contact Us</a>
    </Navbar.Text>
  </Navbar.Collapse>


  <Navbar.Collapse>
    <Navbar.Text>
      © Copyright vsaw 2020. Designed and Developed by : <a href="linkedin.com/in/vishal-kumar-8b9b2a190">Vishal Saw</a>
    </Navbar.Text>
  </Navbar.Collapse>
</Navbar>
		);
}

export default Footer;