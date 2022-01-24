import "./App.css";
import styled from "styled-components";
import AllRoutes from "./route/Routes";
import Test from "components/gather/Test";

const MobileBox = styled.div`
  width: 375px;
  height: 743px;
  padding: 0 20px 34px;
  box-sizing: border-box;
  margin: 0 auto;
  text-align: center;
  background-color: var(--Surface);
`;

function App() {
  return (
    <MobileBox>
      <AllRoutes />
      {/* <Test /> */}
    </MobileBox>
  );
}

export default App;
