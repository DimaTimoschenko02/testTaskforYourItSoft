import React, { FC, useContext, useEffect, useState } from "react";
import { IPost } from "../types/post.types";
import { observer } from "mobx-react-lite";
import { toJS } from "mobx";
import { Context } from "..";
import styled from "styled-components";

const Posts = () => {
  const [currPost, setCurrPost] = useState<IPost>({} as IPost);
  const { store } = useContext(Context);
  useEffect(() => {
    const foo = async () => {
      await store.setPosts();
    };
    foo();
  }, [store.user]);
  return (
    <Container>
      <div className="post-container">
        {store.posts
          ? toJS(store.posts).map((post) => {
              return (
                <div
                  className={`post ${
                    post.id === currPost.id ? "show-on" : "show-off"
                  }`}
                  key={post.id}
                  onClick={() => {
                    if (currPost.id === post.id) {
                      setCurrPost({} as IPost);
                    } else setCurrPost(post);
                  }}
                >
                  <h2>{post.title}</h2>
                  <h4>{post.body}</h4>
                  <hr />
                </div>
              );
            })
          : null}
      </div>
    </Container>
  );
};
const Container = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;

  .post-container {
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    background-color: #333348;
    border-radius: 40px;

    .post {
      width: 80%;
      height: 20%;
      border: none;
      color: #eeeeee;
      hr {
        border: 1px solid #4c4c6a;
      }
    }
    .show-off {
      h4 {
        display: none;
      }
    }
    .show-on {
      height: 50%;
    }
  }
  .post-container::-webkit-scrollbar {
    display: none;
  }
`;
export default observer(Posts);
