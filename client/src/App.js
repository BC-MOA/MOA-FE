import "./App.css";
import styled from "styled-components";
import AllRoutes from "./route/Routes";
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
      <AllRoutes />
    </MobileBox>
  );
}

export default App;
