import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { logout } from "__redux__/actions";

import { Main as MainPage } from "components";

const Main = ({ logout, loggedInUser, closingSession }) => {
  const handleLogOut = () => {
    logout();
  };

  if (!loggedInUser) {
    return <Redirect to="/" />;
  }

  return <MainPage onLogout={handleLogOut} closingSession={closingSession} />;
};

const mapStateToProps = (state) => {
  return {
    loggedInUser: state.auth.loggedInUser,
    closingSession: state.auth.closingSession,
  };
};

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
