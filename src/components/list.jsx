import React from "react";
import Card from "react-bootstrap/Card";
import Task from "./task";
import close from "../img/close.png";
import {
  DeleteList,
} from "../services/axios/axiosServices";
import { useDispatch, useStore } from "../store/StoreProvider";
import { types } from "../store/StoreReducer";

export default function List({
  list,
  addTask,
  indexList,
  closeTask,
}) {
  const { lists } = useStore();
  const dispatch = useDispatch();


  //delete list
  function deleteList(id) {
    DeleteList(id)
      .then((response) => {
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {});
  }


  function closeList() {
    deleteList(list.id);
    let dataTaskTemp = lists.filter((listIt) => listIt.id !== list.id);

    dispatch({
      type: types.loadData,
      payload: dataTaskTemp
    })
  }



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
        onClick={() => closeList()}
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
