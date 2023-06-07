import React, { useEffect, useReducer } from "react";

function reducer(state, action) {
  /*
    state은 현재 가리키고 있는 상태
    action은 state변경을 위해 필요한 정보를 담은 값
    */
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      return state;
  }
}

const Counter = () => {
  /* 
    첫번째 인자에 reducer 함수를 넣고
    두번째 인자에 해당 reducer의 기본 값을 넣어 줌
    */
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  useEffect(() => {
    console.log("useEffect()");
  }, []);
  console.log("Counter()");
  return (
    <div>
      <p>현재 카운터 값은 {state.value}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
    </div>
  );
};

export default Counter;
