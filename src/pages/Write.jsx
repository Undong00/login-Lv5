import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "../components/allbtn";
import { useMutation } from "react-query";
import StheadComponent from "../components/header";
import { addTodo } from "../api/todo";

function Write() {
  const navigate = useNavigate();
  const [todo, setTodo] = useState({
    title: "",
    body: "",
    writer: "",
  });

  const addTodoMutation = useMutation(addTodo, {
    onSuccess: () => {
      // try
      navigate("/work"); // 이동 가능
    },
    onError: (error) => {
      // catch
      alert(error);
    },
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (todo.title.length < 10) {
      alert("제목은 10글자 이상 입력해야 합니다.");
      return;
    }
    addTodoMutation.mutate(todo);
  };

  return (
    <St>
      <div onClick={() => navigate("/")}>
        <StheadComponent />
      </div>
      <Stformdiv>
        <Stform onSubmit={onSubmitHandler}>
          <Stdiv>작성자</Stdiv>
          <Stinput
            type="text"
            onChange={(ev) => {
              const { value } = ev.target;
              setTodo((prev) => ({
                ...prev,
                writer: value,
              }));
            }}
          />
          <Stdiv>제목</Stdiv>
          <Stinput
            type="text"
            onChange={(ev) => {
              const { value } = ev.target;
              setTodo((prev) => ({
                ...prev,
                title: value,
              }));
            }}
          />
          <Stdiv>내용</Stdiv>
          <StTextarea
            onChange={(ev) => {
              const { value } = ev.target;
              setTodo((prev) => ({
                ...prev,
                body: value,
              }));
            }}
          />
          <Button
            disabled={
              !todo.title ||
              !todo.body ||
              !todo.writer ||
              addTodoMutation.isLoading
            }
          >
            {addTodoMutation.isLoading ? "추가 중..." : "추가하기"}
          </Button>
        </Stform>
      </Stformdiv>
    </St>
  );
}

export default Write;

const Stformdiv = styled.div`
  margin: 20px;
`;

const Stform = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Stinput = styled.input`
  box-sizing: border-box;
  height: 46px;
  width: 100%;
  outline: none;
  border-radius: 8px;
  padding: 0px 12px;
  font-size: 20px;
  border: 1px solid black;
`;

const StTextarea = styled.textarea`
  box-sizing: border-box;
  height: 200px;
  width: 100%;
  outline: none;
  border-radius: 8px;
  padding: 12px;
  font-size: 20px;
  border: 1px solid black;
  margin-bottom: 200px;
`;
const St = styled.div`
  background-color: #f5f5f5;
  height: 100vh;
`;
const Stdiv = styled.h2`
  color: #696969;
`;
