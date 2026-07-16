import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
//import Nav from 'react-bootstrap/Nav';

function Footer(){

//let currTime = new Date().toLocaleString();
	return (
<Navbar bg="dark" variant="dark">
  
  
  <Navbar.Collapse>
    <Navbar.Text>
      <a href="google.com">About Us</a>
    </Navbar.Text>
  </Navbar.Collapse>

  <Navbar.Collapse>
    <Navbar.Text>
      Contact Us : <a href="google.com">9073352001 </a>
    </Navbar.Text>
  </Navbar.Collapse>


  
    <Navbar.Text>
      © Copyright vsaw 2020. Designed and Developed by 
    </Navbar.Text>
</Navbar>
		);
}

export default Footer;
