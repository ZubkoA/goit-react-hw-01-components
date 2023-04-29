import Statistics from 'components/Statistics/Statistics';
import PropTypes from 'prop-types';
import { Item, StatList, Title } from './CardStats.styled';

function CardStats({ title, stats }) {
  return (
    <div>
      <Title>{title}</Title>
      <StatList>
        {stats.map(stat => (
          <Item key={stat.id}>
            <Statistics label={stat.label} percentage={stat.percentage} />
          </Item>
        ))}
      </StatList>
    </div>
  );
}

CardStats.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default CardStats;
