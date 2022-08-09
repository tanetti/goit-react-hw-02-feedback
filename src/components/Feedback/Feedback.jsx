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

  calculateTotalFeedbackCount = () =>
    Object.values(this.state).reduce((acc, value) => acc + value, 0);

  calculatePercentageOfFeedbackTypes = totalFeedbackCount =>
    Object.fromEntries(
      Object.entries(this.state).map(([key, value]) => [
        key,
        Math.round((value * 100) / totalFeedbackCount) || 0,
      ])
    );

  render() {
    const totalFeedbackCount = this.calculateTotalFeedbackCount();
    const percentageOfFeedbackTypes =
      this.calculatePercentageOfFeedbackTypes(totalFeedbackCount);

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

        {totalFeedbackCount > 0 && (
          <FeedbackStatistics
            percentageOfFeedbackTypes={percentageOfFeedbackTypes}
            totalFeedbackCount={totalFeedbackCount}
          />
        )}
      </>
    );
  }
}
