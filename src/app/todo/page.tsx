"use client";

import { useState } from "react";
import { list } from "postcss";
import { stringify } from "querystring";

export default function Home() {
  //Input, save dan delete data
  //List -> Untuk data
  //currentInput -> Untuk input
  const [todo, setTodo] = useState<{ list: string[]; currentInput: string }>({
    list: [],
    currentInput: "",
  });

  const onHandleToDo = (e: any) => {
    setTodo({ ...todo, currentInput: e.target.value }); //Mengincludekan last todo, reassign currentInput
  };

  const onSave = (e: any) => {
    if (todo.currentInput === "") {
      //Check apakah currentInput kosong atau enggak
      alert("Input can't be empty!");
    } else {
      setTodo({
        list: [...todo.list, todo.currentInput], //memasukan currentInput ke list
        currentInput: "", //reset current input
      });
    }
  };

  const onDelete = (idx: number) => {
    todo.list.splice(idx, 1); //splice data di todo.list
    setTodo({
      list: [...todo.list],
      currentInput: "",
    });
    printData();
  };

  //Checkbox
  //Kalau checkbox ter-tick, tambahkan item ke array dan tampilkan length of array
  //Kalau checkbox tidak ter-tick, hapus item array dan tampilkan length of array
  const [check, setIsChecked] = useState<any[]>([]);

  const onHandleChecked = (e: any) => {
    if (e.target.checked) {
      //Check apakah e.target => tercentang (true)
      setIsChecked((prev: any) => [...prev, e]); //Kalau iya, tambahkan index/item ke array
      printChecked(); //Print Checked (perintah untuk melihat length array)
    } else {
      setIsChecked((prev) => prev.splice(1, 1)); //Kalau tidak, delete item dari array
      printChecked();
    }
  };

  const printChecked = () => {
    return check.length;
  };

  const printData = () => {
    return todo.list.map((value, index) => {
      return (
        <tr key={index}>
          <td id={index.toString()}>
            <input
              type="checkbox"
              id={index.toString()}
              onChange={(e) => onHandleChecked(e)}
            />
          </td>
          <td>{todo.list[index]}</td>
          <td>
            <button
              type="button"
              className="bg-red-600"
              onClick={() => onDelete(index)}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };

  return (
    <div>
      <div>
        <h1>Chores To Do List</h1>
        <table>
          <tbody>{printData()}</tbody>
        </table>
      </div>
      <h1>Done : {printChecked()}</h1>
      <div className="w-full flex flex-col bg-slate-400 px-96 py-10 justify-center align-middle">
        <div className="flex flex-col">
          <label className="">Add Todo List</label>
          <input type="text" onChange={onHandleToDo} />
        </div>
        <button
          onClick={onSave}
          className="bg-red-700 w-fit p-2 rounded-md my-2"
          type="button"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
