import React from "react";
import LifeCycleSample from "./components/LifeCycleSample";
import Info from "./components/Info";
import Counter from "./components/Counter";
import Average from "./components/Average";
function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

//function App() {
class App extends React.Component {
  state = {
    color: "#000000",
  };
  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

  render() {
    return (
      <div>
        <Average />
        <hr />
        <Info />
        <hr />
        <Counter />
      </div>
    );
  }
}

export default App;
