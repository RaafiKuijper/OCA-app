import { Nav, NavDropdown } from "react-bootstrap";

const AdminNavLinks = () => {

  return (
    <Nav>
      <NavDropdown title="Questions" id="basic-nav-dropdown">
        <NavDropdown.Item href="/create-question">
          Create questions
        </NavDropdown.Item>
        <NavDropdown.Item href="/view-questions">View questions</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="/tags">Tags</Nav.Link>
    </Nav>
  );
};

export default AdminNavLinks;
