import Friends from 'components/Friends/Friends';
import PropTypes from 'prop-types';
import { Container, Card } from './CardFriends.styled';

function CardFriends({ friends }) {
  return (
    <Container>
      {friends.map(friend => (
        <Card key={friend.id}>
          <Friends
            status={friend.isOnline}
            avatarUrl={friend.avatar}
            name={friend.name}
          />
        </Card>
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
