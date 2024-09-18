import { useState } from "react";
import "./App.css";

import Profiles from "./Profiles";
import load from "./users";
import { useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    load().then((data) => setUsers(data));
  }, []);

  return (
    <div className="App">
      <Profiles users={users} />
    </div>
  );
}

export default App;
