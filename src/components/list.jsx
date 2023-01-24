import React from "react";
import Card from "react-bootstrap/Card";
import Task from "./task";
import close from "../img/close.png"

export default function List({ list, addTask, index,closeList }) {
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
    <img onClick={()=>closeList(list.id)} src={close} style={{width:25}}></img>
      <Card.Body>
        {list.name}
        {list.tasks.map((task, index) => (
          <Task key={index} task={task}></Task>
        ))}
        <div
          onClick={() => addTask(index)}
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
