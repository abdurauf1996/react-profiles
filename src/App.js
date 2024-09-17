import "./App.css";
import Avatar from "./Avatar";
function App() {
  const url = "https://reqres.in/img/faces/7-image.jpg";
  const name = "Michel Lawson";
  return (
    <div className="App">
      <Avatar name={name} url={url} />
    </div>
  );
}

export default App;
