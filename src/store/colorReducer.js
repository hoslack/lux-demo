const initialState = {
  incrementColor: "green",
  decrementColor: "red",
}

const colorReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_INCREMENT_COLOR":
      return {
        ...state,
        incrementColor: action.color,
      }
    case "CHANGE_DECREMENT_COLOR":
      return {
        ...state,
        decrementColor: action.color,
      }
    default:
      return state
  }
}

export default colorReducer