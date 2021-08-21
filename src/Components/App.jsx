import React, { Component } from 'react'
import Interface from './Interface/Interface';
import Statistics from './Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
  };

  countTotalFeedback = () => {
    // console.log(this.state);
    this.setState(prev => {
      return { total: this.state.bad + this.state.good + this.state.neutral }
    });
    }
    countGoodFeedback = () => {
      console.log(this.state);
      this.setState(prev => {
        return { good: prev.good + 1 }
      });
      console.log(this.state.good);
      this.countTotalFeedback();
    };

    countNeutralFeedback = () => {
      this.setState(prev => {
        return { neutral: prev.neutral + 1 }
      });
      this.countTotalFeedback();
    };

    countBadFeedback = () => {
      this.setState(prev => {
        return {
          bad: prev.bad + 1
        
        }
      });
      this.countTotalFeedback();
    };
  
  
    // const total = this.state.bad + this.state.good + this.state.neutral;
    // return total;
  



  render() {
    return (
      <>
        <Interface />
        <div>
          <button type="button" onClick={this.countGoodFeedback } >good</button>
          <button type="button" onClick={this.countNeutralFeedback} >neutral</button> 
          <button type="button" onClick={this.countBadFeedback} >bad</button>
        </div>
        <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.state.total} />
      </>
    )
    
  }
}

export default App;
