// 회원가입 폼
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Signup() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");


  // ## 회원가입 할 때(Post) : 그냥 등록을 Mock server에 하는 것. (토큰? X,  쿠키? X)
  // ## 로그인 요청을 할 때(Post): 로그인이랑 비밀번호를 Mock Server에 보내요. Response가 있어요.
  // Response에는 JWT Token이 있어요. 이거를 decode(복호화)라는 행위를 해야 해요.
  // JWT를 decode하게 되면 => {userId: ...., jwt토큰이 발급된 시간: ...., expireJWT 토큰 만료시간: ....}
  // decode를 직접 해봅시다.
  // npm jwt-decode



  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!id || !password) {
      alert("아이디와 비밀번호를 모두 입력해주세요.");
      return;
    }
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL1}/register`,
        {
          // 바꿔임마
          id,
          password,
        }
      );
      
      // localStorage.setItem("token", response.data.token);
      console.log(response.data);
      console.log(response); // 여기서 토큰이 가져왔었나?
    } catch (error) {
      // if (error.response.status === 409) {
      //   alert("이미 등록된 아이디입니다.");
      // } else if (error.response.status === 404) {
      //   alert("존재하지 않는 아이디입니다.");
      // } else if (error.response.status === 401) {
      //   alert("비밀번호가 잘못되었습니다.");
      // } else {
      console.log(error.response.data.message);
      // }
    }
  };

  return (
    <Stform onSubmit={handleSubmit}>
      <h1>회원가입하기</h1>
      <h2>아이디</h2>
      <Stinput
        type="id"
        placeholder="id"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />

      <h2>비밀번호</h2>
      <Stinput
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Stbutton type="submit">회원가입</Stbutton>
      <Stbutton
        onClick={() => {
          navigate("/login");
        }}
      >
        로그인하기
      </Stbutton>
    </Stform>
  );
}

export default Signup;

const Stform = styled.form`
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
  text-decoration: none;
  outline: none;
  font-family: "Noto Sans KR", sans-serif;
`;

const Stinput = styled.input`
  box-sizing: border-box;
  height: 46px;
  width: 100%;
  outline: none;
  border-radius: 8px;
  padding: 0px 12px;
  font-size: 14px;
  border: 1px solid;
`;

const Stbutton = styled.button`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  flex-direction: row;
  flex-shrink: 0;
  border: 1px solid rgb(238, 238, 238);
  color: rgb(255, 255, 255);
  height: 46px;
  border-radius: 8px;
  background-color: rgb(254, 83, 31);
  cursor: pointer;
  width: 100%;
`;
