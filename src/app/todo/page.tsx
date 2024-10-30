"use client";

import { useState } from "react";
import { list } from "postcss";
import { stringify } from "querystring";

export default function Home() {
  //Input, save dan delete data
  //List -> Untuk data
  //currentInput -> Untuk input
  const [todo, setTodo] = useState<{
    list: { name: string; isChecked: boolean }[];
    currentInput: string;
  }>({
    list: [],
    currentInput: "",
  });

  const onHandleToDo = (e: any) => {
    setTodo({ ...todo, currentInput: e.target.value }); //Mengincludekan last todo, reassign currentInput dengan value saat ini banget (onchange)
  };

  const onSave = (e: any) => {
    if (todo.currentInput === "") {
      //Check apakah currentInput kosong atau enggak
      alert("Input can't be empty!");
    } else {
      const newInputItem = { name: todo.currentInput, isChecked: false };
      setTodo({
        list: [...todo.list, newInputItem], //memasukan currentInput ke list yang ada di state
        currentInput: "",
      });
    }
  };

  const onDelete = (idx: number) => {
    todo.list.splice(idx, 1); //splice data di todo.list
    setTodo({
      //Update value ke state
      list: todo.list,
      currentInput: "",
    });
    printData();
  };

  //Checkbox
  //Jika checkbox ter-tick/tidak, kita buat array baru yang membalik value isChecked
  //Lalu, kita set balikan tersebut ke state
  //Setelah itu hitung berapa jumlah true pakai filter dan .length
  // const [check, setIsChecked] = useState<any[]>([]);

  const onHandleChecked = (index: number) => {
    const updatedList: any = todo.list.map((value, idx) => {
      if (index === idx) {
        value.isChecked = !value.isChecked;
      }
      return value;
    });
    setTodo({ ...todo, list: updatedList });
  };

  const countCheck = () => {
    // for (let i = 0; i < todo.list.length; i++) {};
    const filterToDo = todo.list.filter((value) => value.isChecked === true);
    return filterToDo.length;
  };

  const [search, setSearch] = useState<string>(""); //fitur search
  //buat function baru untuk memfilter todo.list.name sama dengan searchState => Ini masuk ke array baru
  //lalu map array baru ke fungsi printdata

  const printData = () => {
    return todo.list.map((value: any, index: any) => {
      return (
        <tr key={index}>
          <td id={index.toString()}>
            <input
              type="checkbox"
              id={index.toString()}
              onChange={() => onHandleChecked(index)}
            />
          </td>
          <td>
            <h1 className="text-lg">{value.name}</h1>
          </td>
          <td>
            <button
              type="button"
              className="bg-red-400 p-2 rounded-md"
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
      <div className="flex flex-col px-80">
        <h1 className="font-semibold text-4xl text-center my-5">
          Things To Do Today
        </h1>
        <input
          type="text"
          className="h-10 rounded-sm my-1 border"
          placeholder="Seacrh here.."
        />
        <table className="border border-collapse text-center m-5">
          <tbody>{printData()}</tbody>
        </table>
      </div>
      <h1 className="font-semibold text-2xl text-center">
        Done : {countCheck()}
      </h1>
      <div className="w-full flex flex-col bg-blue-950 px-96 py-10 justify-center align-middle my-8">
        <div className="flex flex-col">
          <label className="font-semibold text-lg my-1 text-white">
            Add Todo List
          </label>
          <input
            type="text"
            className="h-10 rounded-sm my-1"
            onChange={onHandleToDo}
          />
        </div>
        <button
          onClick={onSave}
          className="bg-blue-300 w-fit py-2 px-5 rounded-md my-3"
          type="button"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
