import "./styles/App.css";
import isAdmin from "./user/user";
import AdminHome from "./home/admin-home/AdminHome";
import UserHome from "./home/user-home/UserHome";

// render current route component
function App() {
  return <>{isAdmin ? <AdminHome /> : <UserHome />}</>;
}

export default App;
