import React from "react";
import Card from "react-bootstrap/Card";
import Task from "./task";
import close from "../img/close.png";

export default function List({
  list,
  addTask,
  indexList,
  closeList,
  closeTask,
}) {
  return (
    <Card
      style={{
        margin: 10,
        width: 150,
        padding: 5,
        minWidth: 125,
        height: "100%",
      }}
    >
      <img
        onClick={() => closeList(list.id)}
        src={close}
        style={{ width: 25 }}
        alt =""
      ></img>
      <Card.Body>
        {list.id}
        {list.tasks.map((task, index) => (
          <Task
            key={index}
            task={task}
            closeTask={closeTask}
            indexList={indexList}
          ></Task>
        ))}
        <div
          onClick={() => addTask(list.id, indexList)}
          style={{
            backgroundColor: "rgb(100,200,100)",
            margin: 2,
            padding: 3,
          }}
        >
          Add task
        </div>
      </Card.Body>
    </Card>
  );
}
