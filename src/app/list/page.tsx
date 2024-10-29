"use client";

import { useEffect, useState } from "react";

const List = () => {
  const [data, setData] = useState<any[]>([]);
  const [count, setCount] = useState<number>(0);
  const [isTrue, setIsTrue] = useState<boolean>(false);

  //Model penggunaan useEffect
  //syntax: useEffect(callbackFn, dependencies(optional, berbentuk array)[])
  //1. useEffect hanya akan menjalankan fungsi callback saat awalan render
  useEffect(() => {
    alert(`Use Effect run first`);
  }, []);

  //2. useEffect akan menjalankan fungsi callback setiap kali ada data state yang berubah
  useEffect(() => {
    alert("Use effect runs evey changes state");
  });

  //3. useEffect hanya akan menjalankan fungsi callback jika state yang ditentukan berubah
  useEffect(() => {
    alert('useEffect run when state "data" change');
  }, [count]);

  return (
    <div>
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
    </div>
  );
};

export default List;
