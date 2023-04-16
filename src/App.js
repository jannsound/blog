import "./App.css";
import {useState} from "react";

function App() {
  let [title, setTitle] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "파이썬 독학",
  ]);

  let [date, setDate] = useState(["2023-4-1", "2023-3-29", "2023-1-9"]);

  let [up, setUp] = useState([0, 0, 0]);
  let [down, setDown] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [modalTitle, setModalTitle] = useState(0);
  let [입력값, set입력값] = useState("");

  return (
    <div className="App">
      <div className="black-nav">
        <h4>Ma' blog</h4>
      </div>

      {title.map((data, i) => {
        return (
          <div className="list" key={i}>
            <h3
              onClick={function (a) {
                modal == true ? setModal(false) : setModal(true);
                setModalTitle(i);
                // let dateCopy = [...date];
                // setDate(dateCopy.unshift(time));
              }}
            >
              {title[i]}
            </h3>
            <p>
              발행날자 {date[i]}
              <span
                className="thumb_up"
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
            <button
              onClick={() => {
                let titleCopy = [...title];
                titleCopy.splice(i, 1);
                setTitle(titleCopy);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}
      <div>
        <input
          onChange={(e) => {
            set입력값(e.target.value);
          }}
        />
        <button
          onClick={() => {
            let titleCopy = [...title];
            titleCopy.unshift(입력값);
            setTitle(titleCopy);
            up.unshift(0);
            setUp(up);
            down.unshift(0);
            setDown(down);
            date.unshift(saveDate());
            setDate(date);
          }}
        >
          글발행
        </button>

        {modal == true ? (
          <Modal title={title} modalTitle={modalTitle} date={date} />
        ) : null}
      </div>
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h3>{props.title[props.modalTitle]}</h3>
      <p>발행날자{props.date[props.modalTitle]}</p>
      <p>상세 내용</p>
    </div>
  );
}

function saveDate() {
  let getDate = new Date();
  let year = getDate.getFullYear().toString();
  let month = (getDate.getMonth() + 1).toString();
  let day = getDate.getDate().toString();

  return `${year}-${month}-${day}`;
}
export default App;
