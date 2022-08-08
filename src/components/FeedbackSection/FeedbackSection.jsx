import PropTypes from 'prop-types';
import { Section, Container } from 'components/Shared';
import { Title } from './FeedbackSection.styled';
import { Feedback } from 'components/Feedback/Feedback';

export const FeedbackSection = ({ title }) => (
  <Section>
    <Container>
      <Title>{title}</Title>
      <Feedback />
    </Container>
  </Section>
);

FeedbackSection.propTypes = {
  title: PropTypes.string.isRequired,
};
