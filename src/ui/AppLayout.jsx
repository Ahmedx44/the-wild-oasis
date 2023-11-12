import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./SIdebar";
import Header from "./Header";

const Main = styled.main`
  background-color: green;
  padding: 4rem 4.8rem 6.4rem;
`;

function AppLayout() {
  return (
    <div>
      <Header />
      <Sidebar />
      <Main>
        <Outlet />
      </Main>
    </div>
  );
}

export default AppLayout;
