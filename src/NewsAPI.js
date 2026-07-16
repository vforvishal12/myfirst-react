import React, {Component} from 'react';
import MyNewsCard from './MyNewsCard';

class NewsAPI extends Component {
    render() {
        return (
            <MyNewsCard articles={this.state.articles} />
        )
    }

    state = {
        articles: []
    };

    componentDidMount() {
        fetch('https://newsapi.org/v2/everything?q=india&apiKey=34300e3dec4f49f8bc1b82e638dd3f4b')
            //
            //.then(res => res.text())          // convert to plain text
           // .then(text => console.log('sttt' + text))  // then log it out
            .then(res => res.json())
            .then((data) => {
                this.setState({ articles: data.articles })
            })
            .catch(console.log)
    }
}

export default NewsAPI;


