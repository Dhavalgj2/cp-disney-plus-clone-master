import styled from "styled-components";
import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const user = useSelector((state) => state.user.name);
  return <div>{user}</div>;
};

export default Home;
