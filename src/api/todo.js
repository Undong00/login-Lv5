// api/todo.js

import axios from "axios";
import { cookie } from "../utils/cookie";
export const addTodo = async (todo) => {
  const response = await axios.post(
    `${process.env.REACT_APP_SERVER_URL}`,
    todo
  );
  return response.data;
};

export const getData = async (id) => {
  const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}`);
  const filteredTodos = response.data.filter(
    (todo) => todo.id === parseInt(id)
  );
  return filteredTodos[0];
};

export const patchData = async (id, edit) => {
  const response = await axios.patch(
    `${process.env.REACT_APP_SERVER_URL}/${id}`,
    edit
  );
  return response.data;
};

export const fetchData = async () => {
  const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}`);
  return response.data;
};

export const deleteData = async (id) => {
  await axios.delete(`${process.env.REACT_APP_SERVER_URL}/${id}`);
};

//
// 매 페이지마다 확인
export const checkAuth = async () => {
  try {
    // cookie.get("찾아올쿠키이름")
    // 쿠키 꺼내기
    const authToken = cookie.get("cookieName");
    console.log(authToken); // 얘가 토큰

    const response = await axios.get(
      `${process.env.REACT_APP_SERVER_URL1}/user`,
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    );
    console.log(response.data.message); // 인증
    return response;
  } catch (error) {
    console.log(error);
  }
  // console.log(response);
};
