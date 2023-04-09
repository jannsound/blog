import "./App.css";
import {useState} from "react";

function App() {
  let [title, setTile] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "파이썬 독학",
  ]);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>Ma' blog</h4>
      </div>
    </div>
  );
}

export default App;
