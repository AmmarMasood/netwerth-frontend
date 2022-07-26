import React, { useState } from "react";

export const userInfoContext = React.createContext();
export const emptyUserConstants = {
  _id: "",
  name: "",
  email: "",
  goalNetWorth: {
    worth: "",
    date: "",
  },
  assets: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  liabilities: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
};

const UserStore = ({ children }) => {
  // new stuff starts
  const [userInfo, setUserInfo] = useState(emptyUserConstants);
  return (
    <userInfoContext.Provider value={[userInfo, setUserInfo]}>
      {children}
    </userInfoContext.Provider>
  );
};

export default UserStore;
