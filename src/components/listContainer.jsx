import React, { useEffect, useState } from "react";
import {
  GetListByUser,
  PostNewList,
  DeleteList,
  PostNewTask,
  DeleteTask,
} from "../services/axios/axiosServices";
import List from "./list";
import Card from "react-bootstrap/Card";
import { v4 as uuidv4 } from "uuid";

export default function ListContainer() {
  const [dataTask, setDataTask] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTasks();
  }, []);

  //axios -----------------------------------
  function getTasks() {
    GetListByUser()
      .then((response) => {
        setDataTask(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {});
  }

  //send new list
  function postList(obj) {
    PostNewList(obj)
      .then((response) => {
        addListState(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {});
  }

  //delete list
  function deleteList(id) {
    DeleteList(id)
      .then((response) => {
        console.log("list deleted");
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {});
  }

  //send new task
  function postTask(obj,index) {
    PostNewTask(obj)
      .then((response) => {
        addTaskState(response.data,index);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {});
  }

  //delete task
  function deleteTask(id) {
    DeleteTask(id)
      .then((response) => {
        console.log("list deleted");
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {});
  }

  //crud task-----------------------------------
  //add task
  function addTask(listId,index) {

    postTask(
      {
      "name":"new task",
      "listEnt":{
          "id":listId
      }},index
  );


  }

  function addTaskState(data,listIndex) {

    const dataTaskTemp = [...dataTask];

    dataTaskTemp[listIndex].tasks.push({
      name: data.name,
      id: data.id,
      listId: data.listEnt.id,
    });

    setDataTask(dataTaskTemp);

  }

  //delete task
  function closeTask(taskId, listIndex) {
    deleteTask(taskId);

    const dataTaskTemp = [...dataTask];

    dataTaskTemp[listIndex].tasks = dataTaskTemp[
      listIndex
    ].tasks.filter((task) => task.id !== taskId);

    setDataTask(dataTaskTemp);
  }

  //crud list-----------------------------------
  //add list
  function addList() {
    postList({
      name: "new list",
      user: { id: 1 },
      tasks: [],
    });
  }

  function addListState(data) {
    const dataTaskTemp = [...dataTask];
    dataTaskTemp.push({
      id: data.id,
      name: data.name,
      tasks: [],
    });

    setDataTask(dataTaskTemp);
  }

  //delete list
  function closeList(index) {
    deleteList(index);
    let dataTaskTemp = dataTask.filter((list) => list.id !== index);
    setDataTask(dataTaskTemp);
  }

  //another functions ---------------------------------------

  console.log("render...");

  if (isLoading) {
    return <h4>loading</h4>;
  }

  return (
    <div style={{ display: "flex", padding: 15 }}>
      {dataTask.map((list, index) => (
        <List
          key={index}
          list={list}
          addTask={addTask}
          indexList={index}
          closeList={closeList}
          closeTask={closeTask}
        ></List>
      ))}
      <Card
        onClick={() => addList()}
        style={{
          margin: 10,
          width: 150,
          padding: 1,
          height: 50,
          minWidth: 115,
        }}
      >
        <Card.Body>Add List</Card.Body>
      </Card>
    </div>
  );
}
