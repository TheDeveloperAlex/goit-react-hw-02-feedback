import React, { Component } from 'react'
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
class App extends Component {

 state = {
    good: 0,
    neutral: 0,
    bad: 0,
    }

  countPositiveFeedbackPercentage = () => {
    const { good, bad, neutral } = this.state;
    const res = Math.floor((good * 100) / (bad + good + neutral))
      return (res)
  }

  countTotal = () => {
    const { good, bad, neutral } = this.state;
    const res = bad + good + neutral;
    return res;
  }

  updateStat = (property) => {
      this.setState(prev => {
        return { [property]: prev[property] + 1 }
      });
      this.countPositiveFeedbackPercentage();
  };

  render() {
    const { good, bad, neutral } = this.state;
    const percentage = this.countPositiveFeedbackPercentage();
    const total = this.countTotal();


    return (
      <>
        <Section title="Leave feedback">
          <FeedbackOptions fn={this.updateStat} />
        </Section>
        
      <Section title="Statistics">
          {total !== 0 ? <Statistics good={good} neutral={neutral} bad={bad} total={total} percentage={percentage}  /> : <Notification  message='No feedback given' /> }
      </Section>
      
        
     </>   
      
    )
    
  }
}

export default App;
