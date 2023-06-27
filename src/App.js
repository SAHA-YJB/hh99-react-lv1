import Header from "./components/Header";
import "./App.css";
import { useState } from "react";
import InputTodo from "./components/InputTodo";

function App() {
  const [todo, setTodo] = useState([]);

  const deleteTodo = (todoId) => {
    const filterTodo = todo.filter((todo) => todo.id !== todoId);
    setTodo(filterTodo);
  };
  const ChangeBool = (id) => {
    setTodo(
      todo.map((item) => {
        if (item.id === id) {
          return { ...item, isDone: !item.isDone };
        } else {
          return item;
        }
      })
    );
  };
  return (
    <div className="container">
      <Header />
      <InputTodo allTodo={todo} setTodo={setTodo} />
      <div className="list-container">
        <h2 className="list-head">하자! 🔥</h2>
        <div className="list-wrapper">
          {todo
            .filter((item) => item.isDone === false)
            .map((item) => {
              return (
                <div key={item.id} className="todo-container">
                  <h2>{item.title}</h2>
                  <p>{item.body}</p>
                  <div className="todo-btn">
                    <button
                      className="todo-delete-btn btn"
                      onClick={() => deleteTodo(item.id)}
                    >
                      삭제
                    </button>
                    <button
                      className="todo-complete-btn btn"
                      onClick={() => ChangeBool(item.id)}
                    >
                      {todo.isDone ? "취소" : "완료"}
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
        <h2 className="list-head">했다! 🎉</h2>
        <div className="list-wrapper">
          {todo
            .filter((item) => item.isDone === true)
            .map((item) => {
              return (
                <div key={item.id} className="todo-container">
                  <h2>{item.title}</h2>
                  <p>{item.body}</p>
                  <div className="todo-btn">
                    <button
                      className="todo-delete-btn btn"
                      onClick={() => deleteTodo(item.id)}
                    >
                      삭제
                    </button>
                    <button
                      className="todo-complete btn"
                      onClick={() => ChangeBool(item.id)}
                    >
                      {todo.isDone ? "취소" : "완료"}
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
