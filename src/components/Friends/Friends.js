import PropTypes from 'prop-types';
import { Avatar, Name, Status, Container, AvatarWrap } from './riends.styled';

const Friends = ({ avatarUrl, status, name }) => {
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
Friends.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  status: PropTypes.bool,
  name: PropTypes.string.isRequired,
};

export default Friends;
