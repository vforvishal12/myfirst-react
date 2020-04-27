import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


function MyCards(){
return(
<CardGroup>
  <Card>
    <Card.Img variant="top" src="https://static.toiimg.com/thumb/msid-75407506,width-1070,height-580,imgsize-206266,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg" />
    <Card.Body>
      <Card.Title>Need to give importance to economy and also battle Covid-19: PM Modi to CMs - Times of India</Card.Title>
      <Card.Text>
        India News: As India enters final week of the lockdown, PM Modi on Monday conveyed to chief ministers that the country will have to give importance to the economy.
      </Card.Text>
    </Card.Body>
    
  </Card>

  <Card>
    <Card.Img variant="top" src="https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2020/04/27/Pictures/_d4d8cda8-889e-11ea-9509-5815dbde8d81.jpg" />
    <Card.Body>
      <Card.Title>his Kolkata hospital offers ‘virtual visiting hours’ for Covid-19 patients - Hindustan Times</Card.Title>
      <Card.Text>
        Doctors at the AMRI hospital said this will mitigate the anxiety of Covid-19 patients to a great extent.
        content.{' '}
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card>
    <Card.Img variant="top" src="https://static-news.moneycontrol.com/static-mcnews/2020/03/Coronavirus-6-770x433.jpg" />
    <Card.Body>
      <Card.Title>Tamil Nadu builds makeshift walls to prevent inter-state movement - Moneycontrol</Card.Title>
      <Card.Text>
        Vellore District Collector says the wall will prevent unauthorised entry of people, including migrant labourers, who use vehicles to enter Tamil Nadu without valid permission.
      </Card.Text>
    </Card.Body>
    
  </Card>
</CardGroup>

	);

}


export default MyCards;

