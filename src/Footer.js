import React from 'react';

function Footer(){

let currTime = new Date().toLocaleString();
	return (
		<p>{currTime}</p>
		);
}

export default Footer;