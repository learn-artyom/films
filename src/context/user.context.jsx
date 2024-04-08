import { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext({ user: null, setUser: () => {} });

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};
