import React from "react";
import PropTypes from "prop-types";

import s from "./friends.module.scss";

const FriendItem = ({ id, avatar, name, isOnline }) => {
  return (
    <li key={id} className={s.item}>
      <span className={isOnline ? s.online : s.offline}></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendItem;
