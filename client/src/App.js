import "./App.css";
import styled from "styled-components";
import AllRoutes from "./route/Routes";
import Store from "store/Store";
const MobileBox = styled.div`
  max-width: 500px;
  min-width: 280px;
  height: 100vh;
  padding: 8px 20px;
  box-sizing: border-box;
  margin: 0 auto;
  text-align: center;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
  background-color: var(--Surface);
  @media (min-width: 280px) and (max-width: 500px) {
    width: 100vw;
    /* height: 100vh; */
  }
`;

function App() {
  return (
    <Store>
      <MobileBox>
        <AllRoutes />
      </MobileBox>
    </Store>
  );
}

export default App;
