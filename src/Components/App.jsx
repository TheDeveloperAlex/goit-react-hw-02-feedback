import React, { Component } from 'react'
import Interface from './Interface/Interface';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    percentage: 0,
  };

  

  countPositiveFeedbackPercentage = () => {
      this.setState(prev => {
      return { percentage: (Math.floor((this.state.good * 100)  / (this.state.bad + this.state.good + this.state.neutral) )) || 0 }
    });
  }

  updateStat = (property) => {
      this.setState(prev => {
        return { [property]: prev[property] + 1 }
      });
      this.countPositiveFeedbackPercentage();
  };


  render() {
    return (
      <>
        <Interface />
        {/* <FeedbackOptions options={ } onLeaveFeedback={ } > */}
          <div>
            <button type="button" onClick={() => this.updateStat('good')}>good</button>
            <button type="button" onClick={() => this.updateStat('neutral')}>neutral</button> 
            <button type="button" onClick={() => this.updateStat('bad')}>bad</button>
          </div>
        {/* </FeedbackOptions> */}
        <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.state.bad + this.state.good + this.state.neutral} percentage={this.state.percentage}  message='No feedback given' />
      </>
    )
    
  }
}

export default App;
