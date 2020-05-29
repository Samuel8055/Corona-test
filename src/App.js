import React from "react";
import { Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Helpline from "./components/Helpline";
import UserInfo from "./UserInfo";
import Main from "./Main";
import ProtectedRoute from "./routes/ProtectedRoute";

const App = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path='/' component={UserInfo} />
        <ProtectedRoute path='/main' component={Main} />
        <Route path='/helpline' component={Helpline} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
