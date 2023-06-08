import React, { useState, useRef, useCallback } from "react";
import LifeCycleSample from "./components/LifeCycleSample";
import Info from "./components/Info";
import Counter from "./components/Counter";
import Average from "./components/Average";
/* import StyledComponent from "./components/StyledComponent"; */
import TodoTemplate from "./todo-app/TodoTemplate";
import TodoInsert from "./todo-app/TodoInsert";
import TodoList from "./todo-app/TodoList";

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

//function App() {
/* class App extends React.Component {
  state = {
    color: "#000000",
  };
  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  }; */
const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "초보", checked: true },
    { id: 2, text: "중수", checked: true },
    { id: 3, text: "고수", checked: false },
  ]);

  const nextId = useRef(todos.length);
  const onInsert = useCallback(
    (text) => {
      console.log("onInsert()");
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos]
  );
  const onRemove = useCallback(
    (id) => {
      console.log("onRemove()");
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  const onToggle = useCallback((id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              checked: !todo.checked,
            }
          : todo
      )
    );
  });
  return (
    <div>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplate>
      {/* <StyledComponent />>
        <hr />>
        <Average />
        <hr />
        <Info />
        <hr />
        <Counter /> */}
    </div>
  );
};

export default App;
