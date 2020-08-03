import React from "react";
import { connect } from "react-redux";

import { Login as LoginPage } from "components";

import { login } from "__redux__/actions";
import { Redirect } from "react-router-dom";

const Login = ({ login, loading, error: errorKey, loggedInUser }) => {
  const handleLogin = (form) => {
    const isValidForm = form.current.check();
    if (isValidForm) {
      login({});
    }
  };

  if (loggedInUser) {
    return <Redirect to="/admin" />;
  }

  return (
    <LoginPage onLogin={handleLogin} loading={loading} errorKey={errorKey} />
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    loggedInUser: state.auth.loggedInUser,
  };
};

const mapDispathToProps = {
  login,
};

export default connect(mapStateToProps, mapDispathToProps)(Login);
