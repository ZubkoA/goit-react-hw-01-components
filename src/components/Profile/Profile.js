import PropTypes from 'prop-types';
import {
  Card,
  Img,
  Description,
  Tag,
  Name,
  Location,
  States,
  Quantity,
  Label,
  Container,
} from './Profile.styled';

const Wrap = ({ username, tag, location, avatar, stats }) => {
  return (
    <Card>
      <Description>
        <Img src={avatar} alt={username} />
        <Name>{username}</Name>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <States>
        <li>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </li>
        <li>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </li>
        <li>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </li>
      </States>
    </Card>
  );
};

function Profile({ users }) {
  return (
    <Container>
      {users.map(({ username, tag, location, avatar, stats }) => (
        <Wrap
          username={username}
          tag={tag}
          location={location}
          avatar={avatar}
          stats={stats}
        />
      ))}
    </Container>
  );
}

Profile.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      stats: PropTypes.number.isRequired,
    })
  ),
};

export default Profile;
