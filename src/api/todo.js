// api/todo.js

import axios from "axios";

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
