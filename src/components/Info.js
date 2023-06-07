import React, { useState, useEffect, useReducer } from "react";
import useInputs from "./useInput";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const Info = () => {
  /* const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  useEffect(() => {
    console.log("useEffect()");
    console.log({ name, nickname });
    return () => {
      console.log("cleanup()");
    };
  }, [name]);
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  }; */
  //const [state, dispatch] = useReducer(reducer, {
  const [state, onChange] = useInputs({ name: "", nickname: "" });
  const { name, nickname } = state;
  //const onChange = (e) => {dispatch(e.target);};
  console.log("info()");
  return (
    <div>
      {/* <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div> */}
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </div>
    </div>
  );
};
export default Info;
