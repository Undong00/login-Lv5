import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "../components/allbtn";
import useTodos from "../hooks/customcheck";

function Check() {
  const navigate = useNavigate();
  const { todos, isLoading, error, deleteTodo } = useTodos();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <St>
      <Sthead>
        <div
          onClick={() => {
            navigate("/");
          }}
        >
          🏠
        </div>
        <div>undong</div>
      </Sthead>
      <Stdiv>할 일</Stdiv>
      {todos.map((todo) => (
        <StBox key={todo.id}>
          <Link to={`/work/${todo.id}`}>상세보기</Link>
          <Stdiv>제목 : {todo.title}</Stdiv>
          <Stdiv>작성자 : {todo.writer}</Stdiv>
          <Button onClick={() => deleteTodo.mutate(todo.id)}>삭제하기</Button>
        </StBox>
      ))}
    </St>
  );
}

export default Check;

const Sthead = styled.header`
  // 헤드
  background: #696969;
  align-items: center;
  display: flex;
  height: 50px;
  justify-content: space-between;
  padding: 0 20px;
  font-size: 20px;
  color: white;
  cursor: pointer;
`;

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

const Stdiv = styled.h2`
  color: #696969;
  margin: 20px;
`;

const St = styled.div`
  background-color: #f5f5f5;
  height: 100vh;
`;
