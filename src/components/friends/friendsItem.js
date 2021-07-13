import React from "react";

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

export default FriendItem;
