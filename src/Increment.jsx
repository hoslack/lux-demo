import React from "react"
import { useSelector, useDispatch } from "react-redux"

const Increment = () => {
  const dispatch = useDispatch()
  const { incrementColor } = useSelector((state) => state.color)

  const increment = () => {
    dispatch({
      type: "INCREMENT",
    })
  }

  return (
    <button
      style={{
        backgroundColor: incrementColor,
      }}
      onClick={increment}
    >
      Increment
    </button>
  )
}

export default Increment
