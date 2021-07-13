import React from "react";

import FriendItem from "./friendsItem";

import s from "./friends.module.scss";

const FriendList = ({ friends }) => {
  if (friends.length === 0) return null;
  return <ul className={s.friendlist}>{friends.map(FriendItem)}</ul>;
};

export default FriendList;
