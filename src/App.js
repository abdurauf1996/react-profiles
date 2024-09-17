import "./App.css";

import ProfileCard from "./ProfileCard";

function App() {
  const user = {
    email: "michael.lawson@reqres.in",
    first_name: "Michael",
    last_name: "Lawson",
    avatar: "https://reqres.in/img/faces/7-image.jpg",
  };
  return (
    <div className="App">
      <ProfileCard user={user} />
    </div>
  );
}

export default App;
