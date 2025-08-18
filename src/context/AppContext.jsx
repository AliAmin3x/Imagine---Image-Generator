import { createContext, useState } from "react";
import React from "react";
export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const [showlogin, setShowLogin] = useState(false);

  const value = {
    user,
    setUser,
    showlogin,
    setShowLogin,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
