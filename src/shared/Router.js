import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Write from "../pages/Write";
import Check from "../pages/Check";
import Detail from "../pages/Detail";
import Login from "../pages/Log";
import Signup from "../pages/Signup";
// import { useEffect } from "react";
// // import { checkAuth } from "../api/todo";
// import { useSelector, useDispatch } from "react-redux";
// import axios from "axios";
// import { cookie } from "../utils/cookie";
// import { useNavigate } from "react-router-dom";
// import { DELETE_TOKEN } from "../actions/auth";

function Router() {
  // const isMember = useSelector((store) => store.authSlice.authenticated);
  // console.log(isMember);
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  // const checkAuth = async () => {
  //   try {
  //     // cookie.get("찾아올쿠키이름")
  //     // 쿠키 꺼내기
  //     const authToken = cookie.get("cookieName");
  //     // console.log(authToken); // 얘가 토큰

  //     const response = await axios.get(
  //       `${process.env.REACT_APP_SERVER_URL1}/user`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${authToken}`,
  //         },
  //       }
  //     );
  //     console.log(response.data.message); // 인증
  //     alert(response.data.message);
  //   } catch (error) {
  //     console.log(error);
  //     dispatch(DELETE_TOKEN());
  //     cookie.remove("cookieName");
  //     navigate("/login");
  //   }
  //   // console.log(response);
  // };

  // useEffect(() => {
  //   checkAuth();
  // }, [checkAuth]);

  return (
    <>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/work/write" element={<Write />} />
          <Route path="/work" element={<Check />} />
          <Route path="/work/:id" element={<Detail />} />
        </Routes>
      </>
    </>
  );
}

export default Router;
