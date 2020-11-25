import React from "react";
import axios from "axios";

class Results extends React.Component {
  //Resets app state
  onRestartClick = async () => {
    const response = await axios.get(process.env.REACT_APP_SERVER_URL);

    this.props.changeHeadlines(response.data.headlines);
    this.props.changeScore(0);
    this.props.changeSubmitted();
    this.props.resetSelected();
  }

  render() {
    return (
      <div id="results">
        <div className="content">
          Your score is {this.props.score}
        </div>
        <button onClick={() => this.onRestartClick()} className="ui blue button">
          Play Again?
        </button>
        <div className="key">
          <span className="realKey">Real = green</span>
          <span className="fakeKey">Fake = red</span>
        </div>
      </div>
    )
  }
};

export default Results;