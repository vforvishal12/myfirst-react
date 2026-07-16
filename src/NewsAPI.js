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
        // Using CORS proxy to bypass the CORS restriction
        const apiKey = '34300e3dec4f49f8bc1b82e638dd3f4b';
        const newsApiUrl = `https://newsapi.org/v2/everything?q=india&apiKey=${apiKey}`;
        const corsProxyUrl = `https://cors-anywhere.herokuapp.com/${newsApiUrl}`;

        fetch(corsProxyUrl)
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                this.setState({ articles: data.articles || [] })
            })
            .catch(err => {
                console.error('Error fetching news:', err);
                this.setState({ articles: [] });
            })
    }
}

export default NewsAPI;
