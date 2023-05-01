import PropTypes from 'prop-types';
import {
  Avatar,
  Name,
  Status,
  AvatarWrap,
  Container,
  Card,
} from './riends.styled';

const FriendsWrap = ({ avatarUrl, status, name }) => {
  return (
    <>
      <Status>{status}</Status>
      <AvatarWrap>
        <Avatar src={avatarUrl} alt={name} />
      </AvatarWrap>
      <Name>{name}</Name>
    </>
  );
};

function Friends({ friends }) {
  return (
    <Container>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <Card key={id}>
          <FriendsWrap status={isOnline} avatarUrl={avatar} name={name} />
        </Card>
      ))}
    </Container>
  );
}

Friends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatarUrl: PropTypes.string.isRequired,
      status: PropTypes.bool,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default Friends;
