export function reducer(state, action) {
  switch (action.type) {
    case "plus":
      return { value: state.value + action.payload };
    case "minus":
      return { value: state.value - action.payload };
    case "times":
      return { value: state.value * action.payload };
    case "divide":
      return { value: state.value / action.payload };
    case "resetResult":
      return { value: 0 };
    default:
      return state;
  }
}
