import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


function MyCardGroup(){
return(
<CardGroup>
  <Card>
    <Card.Img variant="top" src="https://static-news.moneycontrol.com/static-mcnews/2020/01/Sensex_BSE_NSE_Stock-market_bull_bear_Gold-5-770x433.png" />
    <Card.Body>
      <Card.Title>aking Stock: Cooling off after highs! Nifty holds 9,250 as RBI announces lifeline for MFs - Moneycontrol.com</Card.Title>
      <Card.Text>
        Indian markets extended gains after the Reserve Bank of India (RBI) announced a special liquidity facility of Rs 50,000 crore for mutual funds to calm investors jittery after the Franklin Templeton fiasco. However, the bulls failed to keep the momentum going.
        </Card.Text>
    </Card.Body>
    
  </Card>

  <Card>
    <Card.Img variant="top" src="https://cdn.vox-cdn.com/thumbor/DHmfZNEV1EjiH4l-WjNgt3dwNPA=/0x74:1092x646/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/19327834/verge-whatsapp-notification-2040pxl.0.jpg" />
    <Card.Body>
      <Card.Title>WhatsApp says its forwarding limits have cut the spread of viral messages by 70 percent - The Verge</Card.Title>
      <Card.Text>
       But we cant know if these messages contain misinformation. The spread of highly forwarded messages on WhatsApp has dropped by 70 percent as a result of the companys new forwarding limits, TechCrunch reports.
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card>
    <Card.Img variant="top" src="https://image-cdn.essentiallysports.com/wp-content/uploads/20200427182941/james-dribbling-472x315.jpg" />
    <Card.Body>
      <Card.Title>He’s So Fu**ing Easy To Play, He’s Just Big”: Dennis Rodman on LeBron James’ Game - Essentially Sports</Card.Title>
      <Card.Text>
Dennis Rodman called out LeBron James by saying he could have easily guard him one-on-one and criticized him for his lack of moves on the court.
      </Card.Text>
    </Card.Body>
    
  </Card>
</CardGroup>

	);

}


export default MyCardGroup;

