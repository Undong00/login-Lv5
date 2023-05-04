// 로그인 폼
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import jwtDecode from "jwt-decode";
import { cookie } from "../utils/cookie";

function Login() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Mock Server 에서 토큰을 주면 그걸 해체하는 해체쇼를 보여드릴거에요.
  // 토큰을 해체해서 일단 어떤 구조인지 콘솔을 찍어볼거에요.

  // ## 회원가입 할 때(Post) : 그냥 등록을 Mock server에 하는 것. (토큰? X,  쿠키? X)
  // ## 로그인 요청을 할 때(Post): 로그인이랑 비밀번호를 Mock Server에 보내요. Response가 있어요.
  // Response에는 JWT Token이 있어요. 이거를 decode(복호화)라는 행위를 해야 해요.
  // JWT를 decode하게 되면 => {userId: ...., jwt토큰이 발급된 시간: ...., expireJWT 토큰 만료시간: ....}
  // decode를 직접 해봅시다.
  // npm jwt-decode

  // {
  //   exp: 1683125926; 만료시간
  //   iat: 1683122326; 발급된 시간
  //   id: "ehddjs"; 아이디

  // }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!id || !password) {
      alert("아이디와 비밀번호를 모두 입력해주세요.");
      return;
    }
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL1}/login`,
        {
          // 바꿔임마
          id,
          password,
        }
      );

      setIsLoggedIn(true);

      // console.log(response.data); // 토큰
      // const { exp, iat, id } = jwtDecode(response.data.token);
      const { token } = response.data;
      const decodedJWT = jwtDecode(token);
      // const userId = decodedJWT.id;
      const exp = decodedJWT.exp;

      // console.log(decodedJWT);

      // 1. set :쿠키 안에 데이터를 넣는거.
      // 2. get : 쿠키 안에 있는 거 빼는 거.
      // 3. remove : 쿠키 자체를 삭제하는 거.
      // cookie의 역할: 저장을 하고 매 페이지마다 유효시간이 만료됐는지
      // Mock 서버로 쿠키(JWT)를 보내서 인증을 받아야 해요. 왜냐하면 페이지에서 토큰이 만료될 때마다 로그아웃이 자동으로 되도록 해야 해요.

      // react-cookie 라이브러리는 expire 시간을 Date() 함수로 환산시켜서 줘야 해요.
      // cookie.set("쿠키이름", 쿠키에 저장할 값, {
      //   path: "쿠키를 이용할 수 있는 경로 근데 경로가 그냥  / 면 모든 페이지에서 사용 가능",
      //   expires: "쿠키가 만료되는 시간, 쿠키 유효시간"
      // })
      // 쿠키 만료되는 시간을 넣어주면 브라우저가 알아서 그 쿠키가 유효기간이 만료되면 삭제해줘요.

      const expireDate = new Date(exp * 1000);
      // 쿠키 세팅
      cookie.set("cookieName", token, {
        path: "/",
        expires: expireDate,
      });
    } catch (error) {
      // if (error.response.status === 409) {
      //   alert("이미 등록된 아이디입니다.");
      // } else if (error.response.status === 404) {
      //   alert("존재하지 않는 아이디입니다.");
      // } else if (error.response.status === 401) {
      //   alert("비밀번호가 잘못되었습니다.");
      // } else {
      //   console.log(error);
      // }
      console.log(error);
      alert(error);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/", { replace: true }); // isLoggedIn값이 true이면 이동 전에 페이지 이동 x
    }
  }, [isLoggedIn, navigate]);

  return (
    <Stform onSubmit={handleSubmit}>
      <h1>로그인하기</h1>
      <h2>아이디</h2>
      <Stinput
        type="id"
        placeholder="Id"
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
      <Stbutton type="submit">로그인</Stbutton>
      <Stbutton
        type="submit"
        onClick={() => {
          navigate("/signup");
        }}
      >
        회원가입
      </Stbutton>
    </Stform>
  );
}

export default Login;

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
