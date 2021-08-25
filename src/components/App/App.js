import { Component } from "react";
import FeedbackOptions from "../FeedbackOptions";
import Statistics from "../Statistics";
import Section from "../Section";
import Notification from "../Notification";
import s from "./App.module.css";

class App extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };

  onLeaveFeedback = (value) => {
    this.setState((prevState) => ({
      [value]: prevState[value] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, value) => {
      return (total += value);
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback() > 0
      ? `${Math.round((this.state.good / this.countTotalFeedback()) * 100)}%`
      : `0%`;
  };

  render() {
    const names = Object.keys(this.state);
    const options = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <>
        <div className={s.wrapper}>
          <Section title="Please leave your">
            <FeedbackOptions
              onLeaveFeedback={this.onLeaveFeedback}
              names={names}
            />
          </Section>
        </div>
        <Section>
          {total ? (
            <Statistics
              options={options}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="No feedback given..." />
          )}
        </Section>
      </>
    );
  }
}

export default App;
