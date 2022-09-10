import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import styled from "styled-components";
import { Context } from "../..";
const Search = () => {
  const { store } = useContext(Context);
  return (
    <Container>
      <input
        type="text"
        placeholder="Search"
        onChange={(event) => store.findUsers(event.target.value)}
      />
    </Container>
  );
};

const Container = styled.div`
  padding-right: 5%;
  input {
    font-size:18px;
    padding-left: 10%;
    background-color: #333348;
    width: 200px;
    height: 50px;
    border-radius: 25px;
    ::placeholder {
      color: #EEEEEE;
    }
  }

  textarea,
  input {
    color: #EEEEEE;
  }
`;

export default observer(Search);
