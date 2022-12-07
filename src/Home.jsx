import React from "react"
import { useSelector, useDispatch } from "react-redux"

import Decrement from "./Decrement"
import Increment from "./Increment"

const Home = () => {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.counter.counter)

  return (
    <div
      style={{
        border: "2px solid black",
      }}
    >
      <h1>Home</h1>
      <h4>Count: {count}</h4>

      <Increment />
      <Decrement />

      <button
        onClick={() =>
          dispatch({
            type: "CHANGE_INCREMENT_COLOR",
            color: "blue",
          })
        }
      >
        Change Increment Color
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "CHANGE_DECREMENT_COLOR",
            color: "yellow",
          })
        }
      >
        Change Decrement Color
      </button>
    </div>
  )
}

export default Home
