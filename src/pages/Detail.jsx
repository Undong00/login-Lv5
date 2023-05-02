import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "../components/allbtn";
import StheadComponent from "../components/header";
import { useQuery, useMutation } from "react-query";
import { getData, patchData } from "../api/todo";

function Detail() {
  const navigate = useNavigate();
  const [editTodo, setEditTodo] = useState({
    title: "",
    body: "",
  });
  // get
  const { id } = useParams();

  const {
    data: todo,
    isLoading,
    error,
  } = useQuery(["todo", id], () => getData(id));

  const editTodoMutation = useMutation((edit) => patchData(todo.id, edit));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const onClickEditButtonHandler = async (edit) => {
    try {
      await editTodoMutation.mutateAsync(edit);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <St>
      <div>
        <StheadComponent onClick={() => navigate("/")} />
      </div>
      {todo && (
        <div>
          <StBox>
            <Stdiv>id : {todo.id}</Stdiv>
            <Stdiv>title : {todo.title}</Stdiv>
            <Stdiv>body : {todo.body}</Stdiv>
            <Link to={"/work"}>목록으로</Link>
          </StBox>
          <div>
            <Stform>
              <Stdiv>제목</Stdiv>
              <Stinput
                type="text"
                placeholder="title 입력"
                onChange={(ev) => {
                  setEditTodo({
                    ...editTodo,
                    title: ev.target.value,
                  });
                }}
              />
              <Stdiv>내용</Stdiv>
              <StTextarea
                type="text"
                placeholder="body 수정"
                onChange={(ev) => {
                  setEditTodo({
                    ...editTodo,
                    body: ev.target.value,
                  });
                }}
              />
              <Button
                // type='button' 을 추가해야 form의 영향에서 벗어남
                type="button"
                onClick={() => onClickEditButtonHandler(editTodo)}
              >
                수정하기
              </Button>
            </Stform>
          </div>
        </div>
      )}
    </St>
  );
}

export default Detail;

const StBox = styled.div`
  margin: 20px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  flex-direction: row;
  padding: 0px 20px;
  height: 120px;
  border: 1px solid gray;
  background-color: rgb(255, 255, 255);
  border-radius: 8px;
  margin-top: 30px;
`;

const Stinput = styled.input`
  box-sizing: border-box;
  height: 46px;
  outline: none;
  border-radius: 8px;
  padding: 0px 12px;
  font-size: 20px;
  border: 1px solid black;
`;

const StTextarea = styled.textarea`
  box-sizing: border-box;
  height: 200px;
  outline: none;
  border-radius: 8px;
  padding: 12px;
  font-size: 20px;
  border: 1px solid black;
  margin-bottom: 200px;
`;

const Stform = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0px 20px 0px;
`;
const Stdiv = styled.h2`
  margin: 20px;
  color: #696969;
`;
const St = styled.div`
  background-color: #f5f5f5;
  height: 100vh;
`;
