import Profile from 'components/Profile/Profile';
import PropTypes from 'prop-types';
import { Container } from './Card.styled';

function Card({ users }) {
  return (
    <Container>
      {users.map(user => (
        <Profile
          key={user.username}
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          followers={user.stats.followers}
          views={user.stats.views}
          likes={user.stats.likes}
        />
      ))}
    </Container>
  );
}

Card.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape()),
};

export default Card;
