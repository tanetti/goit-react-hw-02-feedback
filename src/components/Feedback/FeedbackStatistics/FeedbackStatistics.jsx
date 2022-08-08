import PropTypes from 'prop-types';

export const FeedbackStatistics = ({ percentages, total }) => {
  return (
    <div>
      {Object.entries(percentages).map(([key, value]) => (
        <div key={key}>{`${key}: ${value}%`}</div>
      ))}
      <div>{`Total feedbacks: ${total}`}</div>
    </div>
  );
};

FeedbackStatistics.propTypes = {
  percentages: PropTypes.exact({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  total: PropTypes.number.isRequired,
};
