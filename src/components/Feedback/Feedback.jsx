import { Component } from 'react';
import {
  FEEDBACK_STATE_INITIAL_VALUE,
  INCREMENT_VALUE,
} from 'constants/feedback';
import { FeedbackButtonList } from './Feedback.styled';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { FeedbackStatistics } from './FeedbackStatistics/FeedbackStatistics';

export class Feedback extends Component {
  state = FEEDBACK_STATE_INITIAL_VALUE;

  feedbackButtonClickHandler = ({ currentTarget: { name } }) =>
    this.setState(prevState => ({ [name]: prevState[name] + INCREMENT_VALUE }));

  render() {
    const total = Object.values(this.state).reduce(
      (acc, value) => acc + value,
      0
    );

    const percentages = {};

    Object.keys(this.state).map(
      key =>
        (percentages[key] = Math.round((this.state[key] * 100) / total) || 0)
    );

    return (
      <>
        <FeedbackButtonList>
          {Object.entries(this.state).map(([key, value]) => (
            <FeedbackOptions
              key={key}
              options={{ name: key, quantity: value }}
              onLeaveFeedback={this.feedbackButtonClickHandler}
            />
          ))}
        </FeedbackButtonList>

        {total > 0 && (
          <FeedbackStatistics percentages={percentages} total={total} />
        )}
      </>
    );
  }
}
