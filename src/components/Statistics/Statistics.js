import PropTypes from 'prop-types';
import {
  Percentage,
  Container,
  Label,
  Item,
  StatList,
  Title,
} from './Statistics.styled';

const StatisticsWrap = ({ label, percentage }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Percentage>{percentage}</Percentage>
    </Container>
  );
};

function Statistics({ title, stats }) {
  return (
    <>
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <Item key={id}>
            <StatisticsWrap label={label} percentage={percentage} />
          </Item>
        ))}
      </StatList>
    </>
  );
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
