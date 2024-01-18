import "./styles/App.css";
import isAdmin from "./user/user";
import UserHome from "./home/user-home/UserHome";
import AdminHome from "./home/admin-home/AdminHome";

function App() {
  return <>{isAdmin ? <AdminHome /> : <UserHome />}</>;
}

export default App;
