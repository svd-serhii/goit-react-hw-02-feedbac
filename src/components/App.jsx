import React, { Component } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOption';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = e => {
    const resp = e.currentTarget.id;
    this.setState(prevState => ({ [resp]: prevState[resp] + 1 }));
  };

  render() {
    const keys = Object.keys(this.state);

    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions options={keys} onLeaveFeedback={this.handleClick} />
        </Section>
        <Section title={'Statistics'}></Section>
      </>
    );
  }
}

export default App;
