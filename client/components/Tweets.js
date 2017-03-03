import React from 'react';

class Tweets extends React.Component {
  state = { tweets: [] }

  getTweets = (e) => {
    e.preventDefault()
    $.ajax({
      url: `/tweets/${this.refs.handle.value}`,
      type: 'GET'
    }).done( tweets => {
      this.setState({ tweets });
      this.refs.tweetForm.reset();
    });
  }

  tweets = () => {
    return this.state.tweets.map( tweet => {
      return (<li className="collection-item" key={tweet.id}>{tweet.text}</li>);
    });
  }

  render() {
    return (
      <div>
        <h3 className="text-center">Tweeting Now</h3>
        <form ref="twitterForm" onSubmit={this.getTweets}>
          <input ref="handle" placeholder="Twitter" />
        </form>
        <ul className="collection">
          {this.tweets()}
        </ul>
      </div>
    )
  }
}

export default Tweets;
