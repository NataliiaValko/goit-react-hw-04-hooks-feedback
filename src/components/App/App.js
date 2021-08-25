import { useState } from "react";
import FeedbackOptions from "../FeedbackOptions";
import Statistics from "../Statistics";
import Section from "../Section";
import Notification from "../Notification";
import s from "./App.module.css";

const types = {
  GOOD: "good",
  NEUTRAL: "neutral",
  BAD: "bad",
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = (value) => {
    switch (value) {
      case types.GOOD:
        setGood((prev) => prev + 1);
        break;
      case types.NEUTRAL:
        setNeutral((prev) => prev + 1);
        break;
      case types.BAD:
        setBad((prev) => prev + 1);
        break;

      default:
        throw new Error();
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return countTotalFeedback() > 0
      ? `${Math.round((good / countTotalFeedback()) * 100)}%`
      : `0%`;
  };

  const namesTypes = Object.values(types);
  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <>
      <div className={s.wrapper}>
        <Section title="Please leave your">
          <FeedbackOptions
            onLeaveFeedback={onLeaveFeedback}
            names={namesTypes}
          />
        </Section>
      </div>
      <Section>
        {total ? (
          <Statistics
            options={{ good, neutral, bad }}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="No feedback given..." />
        )}
      </Section>
    </>
  );
};

export default App;
