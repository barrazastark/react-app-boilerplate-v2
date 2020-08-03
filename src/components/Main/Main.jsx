import React from "react";

import { PageLoader } from "UIElements";

import "rsuite/dist/styles/rsuite-default.css";

const Main = ({ onLogout, closingSession }) => {
  if (closingSession) {
    return <PageLoader message="Cerrando sesion" />;
  }

  return (
    <>
      <div>Main app</div>
      <button onClick={onLogout}>Log out</button>
    </>
  );
};

export default Main;
