"use client";

import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";
import axios from "axios";
import { error } from "console";

const List = () => {
  //Data from context
  const { language } = useContext(LanguageContext);

  const [data, setData] = useState<any[]>([]);
  const [count, setCount] = useState<number>(0);
  const [isTrue, setIsTrue] = useState<boolean>(false);

  //Model penggunaan useEffect
  //syntax: useEffect(callbackFn, dependencies(optional, berbentuk array)[])
  //1. useEffect hanya akan menjalankan fungsi callback saat awalan render
  useEffect(() => {
    console.log(`Use Effect run first`);
    getDataUser();
  }, []);

  //2. useEffect akan menjalankan fungsi callback setiap kali ada data state yang berubah
  useEffect(() => {
    console.log("Use effect runs evey changes state");
  });

  //3. useEffect hanya akan menjalankan fungsi callback jika state yang ditentukan berubah
  useEffect(() => {
    console.log('useEffect run when state "data" change');
  }, [count]);

  //CALL API
  //ASYNC
  // const getDataUser = () => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => {
  //       console.log(response.data);
  //       setData(response.data);
  //     })
  //     .catch((error: any) => {
  //       console.log(error);
  //     });
  // };

  //PAKAI ASYNC AWAIT
  const getDataUser = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  //LOCAL STORAGE

  return (
    <div>
      <div className="w-full h-full rotate-45 bg-red-400 rounded-full absolute top-1/2 left-1/2 blur-3xl opacity-30"></div>
      <div className="w-full h-full rotate-45 bg-orange-500 rounded-full absolute top-1/2 right-1/2 blur-3xl opacity-30"></div>
      <input className="h-7 bg-slate-500 opacity-50" />
      <h1 className="uppercase text-9xl">{language}</h1>
      <h1>List Page</h1>
      <button
        className="bg-slate-500 rounded-md uppercase p-2"
        type="button"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button
        className="bg-slate-500 rounded-md uppercase p-2"
        type="button"
        onClick={() => {
          setIsTrue(!isTrue);
        }}
      >
        {isTrue ? "TRUE" : "FALSE"}
      </button>
      <h1>{data[0]?.name}</h1>
    </div>
  );
};

export default List;
