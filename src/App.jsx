import "./App.css";
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { auth } from "./firebase.js";
import { useStateValue } from "./Provider/StateProvider.jsx";

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <>
      {/* <Header />
      <Home />
      <Footer /> */}
      <Outlet />
    </>
  );
}

export default App;
