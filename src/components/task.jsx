import React from "react";
import close from "../img/close.png";
import { useDispatch, useStore } from "../store/StoreProvider";
import { types } from "../store/StoreReducer";

export default function Task({ task, closeTask, indexList }) {
  const { user, products } = useStore();
  const dispatch = useDispatch();

  return (
    <>
      <div
        style={{
          backgroundColor: "rgb(200,200,200)",
          margin: 2,
          padding: 3,
        }}
      >
        <img
          onClick={() => closeTask(task.id, indexList)}
          src={close}
          style={{ width: 15 }}
          alt=""
        ></img>

        {task.id}
      </div>

      <button onClick={() => dispatch({
                type: types.loadData,
                payload: []
            })}>
                Login
      </button>

    </>
  );
}
