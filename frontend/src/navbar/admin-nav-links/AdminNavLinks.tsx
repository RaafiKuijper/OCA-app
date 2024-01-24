import { Nav } from "react-bootstrap";

const AdminNavLinks = () => {
  return (
    <Nav>
      <Nav.Link href="/create-question">Questions</Nav.Link>
      <Nav.Link href="/tags">Tags</Nav.Link>
    </Nav>
  );
};

export default AdminNavLinks;
