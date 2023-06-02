import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <Outlet />
      <footer>footer</footer>
    </div>
  );
}

export default Layout;
