import React from "react";
import PropTypes from "prop-types";

import FriendItem from "./friendsItem";

import s from "./friends.module.scss";

const FriendList = ({ friends }) => {
  if (friends.length === 0) return null;
  return <ul className={s.friendlist}>{friends.map(FriendItem)}</ul>;
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ).isRequired,
};

export default FriendList;
