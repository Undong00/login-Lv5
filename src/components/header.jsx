import styled from "styled-components";

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

function StheadComponent() {
  return (
    <Sthead>
      <div>🏠</div>
      <div>undong</div>
    </Sthead>
  );
}

export default StheadComponent;
