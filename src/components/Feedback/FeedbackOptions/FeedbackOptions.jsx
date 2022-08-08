import PropTypes from 'prop-types';
import {
  FeedbackListItem,
  FeedbackButton,
  ButtonGoodIcon,
  ButtonNormalIcon,
  ButtonBadIcon,
  FeedbackValueLabel,
} from './FeedbackOptions.styled';

export const FeedbackOptions = ({
  options: { name, quantity },
  onLeaveFeedback,
}) => {
  return (
    <FeedbackListItem>
      <FeedbackButton
        type="button"
        name={name}
        aria-label={`Leave ${name} feedback`}
        onClick={onLeaveFeedback}
      >
        {name === 'good' && <ButtonGoodIcon size="100%" />}
        {name === 'neutral' && <ButtonNormalIcon size="100%" />}
        {name === 'bad' && <ButtonBadIcon size="100%" />}
      </FeedbackButton>
      <FeedbackValueLabel>{quantity}</FeedbackValueLabel>
    </FeedbackListItem>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.exact({
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
