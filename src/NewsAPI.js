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
        fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=34300e3b476b44f9b3705ffa5d73ff5e')
            .then(res => res.json())
            .then((data) => {
                console.log(data); // Debug: check what data you're getting
                this.setState({ articles: data.articles || [] })
            })
            .catch(err => {
                console.error('Error fetching news:', err);
                this.setState({ articles: [] });
            })
    }
}

export default NewsAPI;
