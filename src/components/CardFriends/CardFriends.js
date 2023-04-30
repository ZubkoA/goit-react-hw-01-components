import Friends from 'components/Friends/Friends';
import PropTypes from 'prop-types';
import { Container } from './CardFriends.styled';

function CardFriends({ friends }) {
  return (
    <Container>
      {friends.map(friend => (
        <li key={friend.id}>
          <Friends
            status={friend.isOnline}
            avatarUrl={friend.avatar}
            name={friend.name}
          />
        </li>
      ))}
    </Container>
  );
}

CardFriends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default CardFriends;
