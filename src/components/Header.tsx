import React from "react";
import { observer } from "mobx-react-lite";
import styled from "styled-components";
import Search from "./ui/Search";
import Sort from "./ui/Sort";
const Header = () => {
  return (
    <Container>
      <Sort />
      <Search />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 12%;
  align-items: center;
  width: 100%;
  background-color: #12122d;
  justify-content: space-between;
`;

export default observer(Header);
