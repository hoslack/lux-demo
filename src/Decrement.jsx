import React from "react"
import { useSelector, useDispatch } from "react-redux"

const Decrement = () => {
  const dispatch = useDispatch()
  const { decrementColor } = useSelector((state) => state.color)
  const decrement = () => {
    dispatch({
      type: "DECREMENT",
    })
  }

  return (
    <button
      style={{
        backgroundColor: decrementColor,
      }}
      onClick={decrement}
    >
      Decrement
    </button>
  )
}

export default Decrement
