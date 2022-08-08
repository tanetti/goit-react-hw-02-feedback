import PropTypes from 'prop-types';
import { Section, Container } from 'components/Shared';
import { Title } from './FeedbackSection.styled';

export const FeedbackSection = ({ title }) => (
  <Section>
    <Container>
      <Title>{title}</Title>
    </Container>
  </Section>
);

FeedbackSection.propTypes = {
  title: PropTypes.string.isRequired,
};
