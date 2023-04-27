import React, { useState } from "react";
import Routing from "./Routes/routing";
import { ToastContainer } from "react-toastify";
import AuthContext from "./Auth/Context";
import AuthScreem from "./Pages/AuthScreen";

function App() {
  const [user, setUser] = useState();
  return (
    <>
      <AuthContext.Provider value={{ user, setUser }}>
        {/* <Routing /> */}
        {user ? <Routing /> : <AuthScreem />}

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
      </AuthContext.Provider>
    </>
  );
}

export default App;
