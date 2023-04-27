import { useContext } from "react";
import jwtDecode from "jwt-decode";

import AuthContext from "./Context";
import authStorage from "./Storage";

const UseAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logIn = (authToken) => {
    //const user = jwtDecode(authToken);
    //setUser(user);
    setUser(authToken);
    authStorage.SaveSessionData(authToken);
  };

  const logOut = () => {
    setUser(null);
    authStorage.removeToken();
  };

  return { user, logIn, logOut };
};

export default UseAuth;
