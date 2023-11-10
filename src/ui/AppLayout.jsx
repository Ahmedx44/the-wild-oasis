import { Outlet } from "react-router-dom";
import Sidebar from "./SIdebar";
import Header from "./Header";

function AppLayout() {
  return (
    <div>
      <Header />
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default AppLayout;
