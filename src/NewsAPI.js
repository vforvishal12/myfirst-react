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
        fetch('http://newsapi.org/v2/top-headlines?country=in&apiKey=f942ca8aac0743e4b46884f15967d4ea')
            .then(res => res.json())
            .then((data) => {
                this.setState({ articles: data.articles })
            })
            .catch(console.log)
    }
}

export default NewsAPI;


