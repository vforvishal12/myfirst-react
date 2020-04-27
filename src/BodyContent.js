import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card'; 
import MyCards from './MyCards';
import MyCardGroup from './MyCardGroup';

function BodyContent(){
	return (
		<div>
			<MyCards />
			<br/>
			<MyCardGroup />
		</div>
		);
}

export default BodyContent;