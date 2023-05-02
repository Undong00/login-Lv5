import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import StheadComponent from "../components/header";

function Home() {
  const navigate = useNavigate();
  return (
    <St>
      <div onClick={() => navigate("/")}>
        <StheadComponent />
      </div>
      <Stlayout>
        <Stborder
          onClick={() => {
            // 미정
            navigate("/work/write");
          }}
        >
          <h1>Write</h1>
          <h2>👉 Click!</h2>
        </Stborder>
        <Stborder
          onClick={() => {
            // 미정
            navigate("/work");
          }}
        >
          <h1>Check</h1>
          <h2>👉 Click!</h2>
        </Stborder>
      </Stlayout>
    </St>
  );
}

export default Home;

const St = styled.div`
  background-color: #f5f5f5;
  height: 100vh;
`;
const Stlayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
`;

const Stborder = styled.div`
  border: 2px solid black;
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 200px;
  border-radius: 40px;
  color: #696969;
`;
