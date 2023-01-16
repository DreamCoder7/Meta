import { useRef, useReducer } from "react";

import "./App.css";
import { reducer } from "./Reducer/Reducer";

const callFn = (e, dispatchFn) => {
  e.preventDefault();
  dispatchFn();
};

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);

  const initialState = { value: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);

  const plus = (e) =>
    callFn(e, () =>
      dispatch({ type: "plus", payload: Number(inputRef.current.value) })
    );

  const minus = (e) =>
    callFn(e, () =>
      dispatch({ type: "minus", payload: Number(inputRef.current.value) })
    );

  const times = (e) =>
    callFn(e, () =>
      dispatch({ type: "times", payload: Number(inputRef.current.value) })
    );

  const divide = (e) =>
    callFn(e, () =>
      dispatch({ type: "divide", payload: Number(inputRef.current.value) })
    );

  const resetInput = (e) => callFn(e, () => (inputRef.current.value = ""));

  const resetResult = (e) => callFn(e, () => dispatch({ type: "resetResult" }));

  return (
    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <p ref={resultRef}>Result: {state.value}</p>
        <input
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />
        <button onClick={plus}>add</button>
        <button onClick={minus}>substruct</button>
        <button onClick={times}>multiply</button>
        <button onClick={divide}>divide</button>
        <button onClick={resetInput}>resetInput</button>
        <button onClick={resetResult}>resetResult</button>
      </form>
    </div>
  );
}

export default App;
