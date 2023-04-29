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
} from './Profile.styled';

const Profile = ({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) => {
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
          <Label>{followers}</Label>
          <Quantity>1000</Quantity>
        </li>
        <li>
          <Label>{views}</Label>
          <Quantity>2000</Quantity>
        </li>
        <li>
          <Label>{likes}</Label>
          <Quantity>3000</Quantity>
        </li>
      </States>
    </Card>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Profile;
