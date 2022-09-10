import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import styled from "styled-components";
import { Context } from "../..";
const Sort = () => {
  const { store } = useContext(Context);
  return (
    <Container>
      <button
        type="button"
        onClick={() => {
          store.sortUsers("name");
          // i ve hardcoded param "name" because there is no tag like <select>
          //so in future for more filter categories it won`t be hardcoded
        }}
      >
        <p>Sort by name</p>
      </button>
    </Container>
  );
};

const Container = styled.div`
  padding-left: 5%;
  button {
    font-size: 18px;
    background-color: #333348;
    width: 200px;
    height: 50px;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      color: #eeeeee;
    }
  }
`;

export default observer(Sort);
