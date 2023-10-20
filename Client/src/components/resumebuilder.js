import React, { useState } from "react";
import MyTodo from "./MyTodoUI";
import axios from "axios";
const ResumeBuilder = () => {
  const [text, setText] = useState(""); //what user will write in the textfield
  const [list, setList] = useState([]); // it will contain all the todo items
  const [editValue, setEditValue] = useState(null); // this is the new edit value

  const addItem = async () => {
    setList([...list, text]);

    let dataSend = {
      todo: text,
    };

    const res = await fetch("http://localhost:5000/todoRoutes/addTodo", {
      method: "POST",
      body: JSON.stringify(dataSend),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log("Response: ", res.status);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteItem = async (id) => {
    console.log("Del item running");
    let myValue = list[id];

    let updatedList = list.filter((item, index) => {
      return index !== id;
    });

    setList(updatedList);

    let dataSend = {
      myValue: myValue,
    };
    const res = await fetch("http://localhost:5000/todoRoutes/deleteTodo", {
      method: "POST",
      body: JSON.stringify(dataSend),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log("Response: ", res.status);
      })
      .catch((err) => {
        console.log(err);
      });

    // FRONTEND
  };

  const deleteAll = async () => {
    console.log("Del all item running");
    setList([]);

    const res = await fetch("http://localhost:5000/todoRoutes/deleteAllTodos", {
      method: "DELETE",
      // body: JSON.stringify(dataSend),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log("Response: ", res.status);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const editItem = async (oldValue, id) => {
    let newValue = prompt("Enter new value: ");
    list[id] = newValue;
    setList([...list]);
    let dataSend = {
      oldValue: oldValue,
      newValue: newValue,
    };
    const res = await fetch("http://localhost:5000/todoRoutes/editTodo", {
      method: "PUT",
      body: JSON.stringify(dataSend),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log("Response: ", res.status);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const showTodos = async () => {
    console.log("Show item running");
    let response;
    const res = await fetch(`http://localhost:5000/todoRoutes/showTodos`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    // console.log(res)
    response = await res.json();

    let data = response.item;
    // console.log(data)

    data.map((item, index) => {
      // console.log(item.todoItem)
      setList((list) => [...list, item.todoItem]);
    });
  };

  return (
    <div>
      <MyTodo
        deleteAll={deleteAll}
        addItem={addItem}
        deleteItem={deleteItem}
        editItem={editItem}
        showTodos={showTodos}
        text={text}
        setText={setText}
        list={list}
        setList={setList}
      />
    </div>
  );
};

export default ResumeBuilder;