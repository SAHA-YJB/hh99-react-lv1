import { useState } from "react";
import {v4 as uuidv4} from 'uuid';
import '../style/inputTodo.css'

const InputTodo = ({ allTodo, setTodo }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const titleChange = (e) => {
    setTitle(e.target.value);
  };

  const bodyChange = (e) => {
    setBody(e.target.value);
  };
  const addTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      id: uuidv4(),
      title,
      body,
      isDone: false,
    };
    setTodo([...allTodo, newTodo]);
  };
  return (
    <form className="input-from">
      <div className="add-input">
        <label>제목</label>
        <input
          type="text"
          className="input"
          value={title}
          onChange={titleChange}
        />
        <label>내용</label>
        <input
          type="text"
          className="input"
          value={body}
          onChange={bodyChange}
        />
      </div>
      <button className="add-btn" type="submit" onClick={addTodo}>
        추가
      </button>
    </form>
  );
};
export default InputTodo