import PropTypes from 'prop-types';
import { Component } from 'react';
import {
  StyledChart,
  FeedbackStatisticsBox,
  StatisticsTitle,
  StatisticsTotalHead,
  StatisticsTotalValue,
} from './FeedbackStatistics.styled';
import { chartOptions } from 'constants/chartOptions';

export class FeedbackStatistics extends Component {
  state = {
    shouldStatisticsBoxShown: false,
  };

  prepareDataForChart = () => [
    ['Type of feedback', 'Feedback quantity'],
    ...Object.entries(this.props.currentFeedbacsState).map(([key, value]) => [
      key[0].toUpperCase() + key.substring(1) + ' feedbacks',
      value,
    ]),
  ];

  findTopFeedbackTypeFromPercentage = () =>
    Object.entries(this.props.percentageOfFeedbackTypes).sort(
      (a, b) => b[1] - a[1]
    )[0][0];

  setStatisticsBoxShown = () =>
    this.setState({ shouldStatisticsBoxShown: true });

  render() {
    const chartData = this.prepareDataForChart();
    const topFeedbackType = this.findTopFeedbackTypeFromPercentage();

    return (
      <FeedbackStatisticsBox shouldShown={this.state.shouldStatisticsBoxShown}>
        <StatisticsTitle>Feedback statistics:</StatisticsTitle>
        <StyledChart
          chartType="PieChart"
          data={chartData}
          options={chartOptions}
          onLoad={this.setStatisticsBoxShown}
        />
        <StatisticsTotalHead>
          Total:
          <StatisticsTotalValue topFeedbackType={topFeedbackType}>
            {this.props.totalFeedbackCount}
          </StatisticsTotalValue>
        </StatisticsTotalHead>
      </FeedbackStatisticsBox>
    );
  }
}

FeedbackStatistics.propTypes = {
  currentFeedbacsState: PropTypes.exact({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  percentageOfFeedbackTypes: PropTypes.exact({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  totalFeedbackCount: PropTypes.number.isRequired,
};
