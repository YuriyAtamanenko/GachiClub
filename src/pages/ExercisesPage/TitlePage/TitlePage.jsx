import { Title } from './TitlePage.styled';
import PropTypes from 'prop-types';
const TitlePage = ({ title }) => {
  return <Title>{title ? title : 'Exercises'}</Title>;
};
export default TitlePage;
TitlePage.propTypes = {
  title: PropTypes.string,
};
