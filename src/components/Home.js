import styled from "styled-components";
import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const user = useSelector((state) => state.user.name);
  return <Container>{user}</Container>;
};
const Container = styled.main`
  position: relative;
  background: url("/images/home-background.png");
`;
export default Home;
