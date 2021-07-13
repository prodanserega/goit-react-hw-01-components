import React from "react";

import Profile from "./Profile/profile";
import Statistics from "./Statistics/statistical-data";
import FriendList from "./friends/friends";
import Transactions from "./transactions/transactions";

import userData from "../data/user.json";
import statsData from "../data/statistical-data.json";
import friends from "../data/friends.json";
import transactions from "../data/transactions.json";

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
      <Transactions items={transactions} />
    </>
  );
};

export default App;
