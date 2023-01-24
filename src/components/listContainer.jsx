import React, { useEffect, useState } from "react";
import { GetListByUser } from "../services/axios/axiosServices";
import List from "./list";
import Card from "react-bootstrap/Card";
import { v4 as uuidv4 } from 'uuid';



export default function ListContainer() {
  const [dataTask, setDataTask] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTasks();
  }, []);

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

  function addTask(index) {
    const dataTaskTemp =  [...dataTask];

    dataTaskTemp[index].tasks
    .push(
      {
        "name": "added",
        "id": uuidv4(),
        "listId": index
    }
    );

    setDataTask(dataTaskTemp)

  }

  function addList() {
    const dataTaskTemp =  [...dataTask];
    dataTaskTemp
    .push(
      {
        "id": uuidv4(),
        "name": "Added List",
        "tasks": []
    }
    );

    setDataTask(dataTaskTemp)
  }

  function closeList(index) {

    console.log(dataTask);

    let dataTaskTemp=dataTask.filter(list =>
      list.id !== index
      );
  
    setDataTask(dataTaskTemp)

  }



  if (isLoading) {
    return <h4>loading</h4>;
  }

  return (
    <div style={{display:"flex", padding:15}}>
      {dataTask.map((list, index) => (
        <List key={index} list={list} addTask={addTask} index={index} closeList={closeList}></List>
      ))}
      <Card
      onClick={()=>addList()}
       style={{ margin: 10, width: 150, padding: 1,height:50,minWidth:115 }}>
        <Card.Body>Add List</Card.Body>
      </Card>
    </div>
  );
}
