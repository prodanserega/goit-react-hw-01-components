import React from "react";

import Profile from "./Profile/profile";
import Statistics from "./Statistics/statistical-data";
import FriendList from "./friends/friends";

import userData from "../data/user.json";
import statsData from "../data/statistical-data.json";
import friends from "../data/friends.json";

const App = () => {
  return (
    <>
      <Profile
        name={userData.name}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statistics items={statsData} />
      <FriendList friends={friends} />
    </>
  );
};

export default App;
