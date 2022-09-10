import { FC, useContext, useEffect } from "react";
import styled from "styled-components";
import { IUser } from "../types/user.types";
import Users from "../components/User";
import Posts from "../components/Post";
import { observer } from "mobx-react-lite";
import { Context } from "..";

const MainPage: FC = () => {
  const { store } = useContext(Context);
  useEffect(() => {
    const foo = async () => {
      await store.setUsers();
    };
    foo();
  }, []);

  return (
    <Container>
      {store.users && <Users />}
      {JSON.stringify(store.user) !== "{}" ? <Posts /> : null}
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  height: 80%;
  background-color: #12122d;

  display: flex;
  flex-wrap: wrap;

  justify-content: space-evenly;
  .users {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: stretch;
    align-items: center;
  }
`;
export default observer(MainPage);
