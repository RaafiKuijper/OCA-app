import { Navbar } from "react-bootstrap";
import "./styles/App.css";
import isAdmin from "./user/user";
import AdminNavLinks from "./navbar/admin-nav-links/AdminNavLinks";
import UserNavbar from "./navbar/user-navbar/UserNavLinks";
import AdminHome from "./home/admin-home/AdminHome";
import UserHome from "./home/user-home/UserHome";

// render current route component
function App() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        {isAdmin ? <AdminNavLinks /> : <UserNavbar />}
      </Navbar>
      {isAdmin ? <AdminHome /> : <UserHome />}
    </>
  );
}

export default App;
