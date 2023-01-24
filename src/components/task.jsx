import React from "react";
import close from "../img/close.png";

export default function Task({ task, closeTask, indexList }) {
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
    </>
  );
}
