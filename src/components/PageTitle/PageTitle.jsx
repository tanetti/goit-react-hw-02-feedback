import PropTypes from 'prop-types';
import { Title } from './PageTitle.styled';

export const PageTitle = ({ title }) => <Title>{title}</Title>;

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
