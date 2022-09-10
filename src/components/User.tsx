import React, { FC, useContext, useEffect } from "react";
import styled from "styled-components";
import { IUser } from "../types/user.types";
import { observer } from "mobx-react-lite";
import { Context } from "..";
const Users = () => {
  const { store } = useContext(Context);
  const setUser = (user: IUser) => {
    store.setUser(user);
  };
  return (
    <Container>
      {store.currentUsers.map((user) => {
        return (
          <div className="user" key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.website}</p>
            <button
              onClick={() => {
                if (store.user.id === user.id) {
                  setUser({} as IUser);
                } else setUser(user);
              }}
            >
              <p>Show posts</p>
            </button>
          </div>
        );
      })}
    </Container>
  );
};
const Container = styled.div`
  width: 40%;
  height: 100%;

  display: flex;
  flex-wrap: wrap;
  .user {
    position: relative;
    margin: auto;
    width: 40%;
    height: 45%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    background-color: #333348;
    border-radius: 40px;
    p {
      font-size: 17px;
      color: #eeeeee;
      margin: 0px;
      padding: 10px;
    }
    button {
      align-items: center;
      align-content: center;
      border-radius: 15px;
      width: 150px;
      min-width: 120px;
      height: 40px;
      background-color: #52519d;
    }
  }
`;
export default observer(Users);
