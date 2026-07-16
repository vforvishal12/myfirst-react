import React from 'react';
import Card from 'react-bootstrap/Card';
//import CardGroup from 'react-bootstrap/CardGroup';

const MyNewsCard = ({articles}) => {
    return (
        <div>

            {articles.map((article, index) => (
                <Card key={index} border="dark" style={{ width: '100%' }}>
            	
			   	<Card.Img variant="top" src={article.urlToImage} />
				

			   	
			    <Card.Body>
			      <Card.Link href={article.url} target="_blank" rel="noopener noreferrer">
			      	<Card.Title>{article.title}</Card.Title>
			      </Card.Link>
			      <Card.Text>{article.description}</Card.Text>
			    </Card.Body>	
		  </Card>
				

            ))} 
            

        </div>
    )
};

export default MyNewsCard;
