import React, { FC, useContext } from "react";
import { observer } from "mobx-react-lite";
import styled from "styled-components";
import { Context } from "..";
import { IUser } from "../types/user.types";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
const Pagination = () => {
  const { store } = useContext(Context);
  function incrementPage() {
    store.setUser({} as IUser);
    store.setPage(store.page + 1);
  }
  function decrementPage() {
    store.setUser({} as IUser);
    store.setPage(store.page - 1);
  }
  return (
    <Container>
      <div className="prev">
        {store.page > 0 && (
          <button type="button" onClick={decrementPage}>
            <MdArrowBackIosNew />
            <p>Previous</p>
          </button>
        )}
      </div>

      <div className="next">
        {store.page < store.maxPages && (
          <button type="button" onClick={incrementPage}>
            <p>Next</p>
            <MdArrowForwardIos />
          </button>
        )}
      </div>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  height: 8%;
  display: flex;
  justify-content: space-between;
  background-color: #12122d;
  button {
    height:70%;
    display: flex;
    align-items: center;
    background-color: #12122d;
    border: none;
    color: #eeeeee;
    svg {
      width: 36px;
      height: 36px;
    }
    p {
      font-size: 20px;
      color: #eeeeee;
    }
  }
  .prev {
    padding-left: 5%;
  }
  .next {
    padding-right: 5%;
  }
`;
const Button = styled.button``;
export default observer(Pagination);
