import PropTypes from 'prop-types';
import { Chart } from 'react-google-charts';
import { chartOptions } from 'constants/chartOptions';

export const FeedbackStatistics = ({
  percentageOfFeedbackTypes,
  totalFeedbackCount,
}) => {
  const data = () => {
    return [
      ['Type of feedback', 'Feedback quantity'],
      ...Object.entries(percentageOfFeedbackTypes).map(([key, value]) => [
        key[0].toUpperCase() + key.substring(1) + ' feedbacks',
        value,
      ]),
    ];
  };

  return (
    // <div>
    //   {Object.entries(percentageOfFeedbackTypes).map(([key, value]) => (
    //     <div key={key}>{`${key}: ${value}%`}</div>
    //   ))}
    //   <div>{`Total feedbacks: ${totalFeedbackCount}`}</div>
    // </div>

    <Chart chartType="PieChart" data={data()} options={chartOptions} />
  );
};

FeedbackStatistics.propTypes = {
  percentageOfFeedbackTypes: PropTypes.exact({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  totalFeedbackCount: PropTypes.number.isRequired,
};
