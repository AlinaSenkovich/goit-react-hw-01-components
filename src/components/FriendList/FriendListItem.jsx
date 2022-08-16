import PropTypes from 'prop-types';
import { FriendItem, OnlineStatus } from './FriendList.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendItem>
      <OnlineStatus isOnline={isOnline}>{isOnline}</OnlineStatus>
      <img className="avatar" src={avatar} alt="User avatar" width="50"></img>
      <p className="name">{name}</p>
    </FriendItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
