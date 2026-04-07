import { useState, useEffect } from "react";

function LocalUserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/users.json")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
      <h2>Local Users</h2>
      {users.map((u, i) => (
        <p key={i}>{u.name} - {u.email}</p>
      ))}
    </div>
  );
}

export default LocalUserList;