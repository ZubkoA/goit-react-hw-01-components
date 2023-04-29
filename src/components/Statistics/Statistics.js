import PropTypes from 'prop-types';
import { Percentage, Container, Label } from './Statistics.styled';

const Statistics = ({ label, percentage }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Percentage>{percentage}</Percentage>
    </Container>
  );
};

Statistics.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Statistics;
