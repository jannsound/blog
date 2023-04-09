import "./App.css";
import {useState} from "react";

function App() {
  let [title, setTitle] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "파이썬 독학",
  ]);

  let [up, setUp] = useState([0, 0, 0]);
  let [down, setDown] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);

  let titleCopy = [...title];

  return (
    <div className="App">
      <div className="black-nav">
        <h4>Ma' blog</h4>
      </div>

      {title.map((data, i) => {
        return (
          <div className="list" key={i}>
            <h3
              onClick={function () {
                modal == true ? setModal(false) : setModal(true);
              }}
            >
              {data}
            </h3>
            <p>
              발행날자
              <span
                className="thumb"
                onClick={function () {
                  let upCopy = [...up];
                  upCopy[i] += 1;
                  setUp(upCopy);
                }}
              >
                {" "}
                👍{" "}
              </span>{" "}
              {up[i]}
              <span
                className="thumb"
                onClick={function () {
                  let downCopy = [...down];
                  downCopy[i] += 1;
                  setDown(downCopy);
                }}
              >
                {" "}
                👎
              </span>
              {down[i]}
            </p>
          </div>
        );
      })}

      <div></div>
      {modal == true ? <Modal title={title} /> : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h3>{props.title[0]}</h3>
      <p>발행날자</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
