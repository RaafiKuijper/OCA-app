import { Container, Navbar } from "react-bootstrap";
import AdminNavLinks from "./admin-nav-links/AdminNavLinks";
import UserNavLinks from "./user-nav-links/UserNavLinks";
import isAdmin from "../user/user";

const MyNavbar = () => {
  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Navbar.Brand>
        <Container>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Oracle_Corporation_logo.svg/2560px-Oracle_Corporation_logo.svg.png"
            style={{
              width: "2em",
              marginRight: "0.5em",
              marginTop: "-0.2em",
            }}
          />
          <span style={{ display: "inline-block" }}>RAPENO OCA</span>
        </Container>
      </Navbar.Brand>
      {isAdmin ? <AdminNavLinks /> : <UserNavLinks />}
    </Navbar>
  );
};

export default MyNavbar;
