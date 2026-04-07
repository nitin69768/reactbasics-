import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>

      <p><Link to="/local">Local Users</Link></p>
      <p><Link to="/users">Users API</Link></p>
      <p><Link to="/posts">Fake API Posts</Link></p>
    </div>
  );
}

export default Dashboard;