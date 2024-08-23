import "./todo.css";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [todoList, setTodoList] = useState([]);
  {
    /* 리얼 돔이 아닌 버츄얼 돔 사용 */
  }
  // const changeValue = (e) => {
  //   setText(e.target.value);
  // };
  const addTodo = () => {
    const isLike = false;
    const todoContent = text;
    const isDone = false;
    const today = new Date();
    const year = today.getFullYear();
    const month =
      today.getMonth() + 1 < 10
        ? "0" + (today.getMonth() + 1)
        : today.getMonth() + 1;
    const date = today.getDate() < 10 ? "0" + today.getDate() : today.getDate();
    const regDate = `${year}-${month}-${date}`;
    const todo = { isLike, todoContent, isDone, regDate };
    setTodoList([...todoList, todo]);
    setText("");
  };
  return (
    <div className="todo-wrap">
      <div className="todo-header">
        <h1>TODO LIST</h1>
      </div>
      <div className="todo-content">
        <div className="input-box">
          <input
            type="text"
            name="input-text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            onKeyUp={(e) => {
              if (e.key === "Enter" || e.keyCode === 13) {
                addTodo();
              }
            }}
          ></input>
          <button onClick={addTodo}>등록</button>
        </div>
        <div className="todo-list-wrap">
          {todoList.map((todo, index) => {
            const like = () => {
              const newArr = [...todoList];
              newArr[index].isLike = !todo.isLike;
              setTodoList(newArr);
            };
            const todoDone = () => {
              todoList[index].isDone = true;
              setTodoList([...todoList]);
            };
            const todoDelte = () => {
              /*
              todoList.splice(index, 1);
              setTodoList([...todoList]);
              */
              const newArr = todoList.filter((item, i) => {
                return index != i;
                //return todo != item;
              });
              setTodoList(newArr);
            };
            return (
              <ul key={"todo" + index} className="todo">
                <li className="todo-like">
                  {todo.isLike ? (
                    <span className="material-icons" onClick={like}>
                      favorite
                    </span>
                  ) : (
                    <span className="material-icons" onClick={like}>
                      favorite_border
                    </span>
                  )}
                </li>
                <li
                  className={todo.isDone ? "todo-text todo-done" : "todo-text"}
                >
                  {todo.todoContent}
                </li>
                <li className="todo-date">{todo.regDate}</li>
                <li className="todo-btn">
                  {todo.isDone ? (
                    ""
                  ) : (
                    <span className="material-icons done" onClick={todoDone}>
                      done
                    </span>
                  )}
                  <span className="material-icons delete" onClick={todoDelte}>
                    delete_forever
                  </span>
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
