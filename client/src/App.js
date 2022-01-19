import "./App.css";
import NavBar from "./route/NavBar";
import styled from "styled-components";

const MobileBox = styled.div`
  width: 375px;
  height: 743px;
  border: 1px solid black;
  margin: 0 auto;
  text-align: center;
`;

function App() {
  return (
    <MobileBox>
      <div>app</div>
      <NavBar />
    </MobileBox>
  );
}

export default App;
