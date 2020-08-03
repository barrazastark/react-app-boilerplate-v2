import React from "react";

import { Link } from "react-router-dom";

import "./Home.scss";

const Home = () => (
  <div>
    Home <Link to="/login">Login</Link>
  </div>
);

export default Home;
