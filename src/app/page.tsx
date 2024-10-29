"use client";

import { useState, useRef } from "react";
import FormInput from "@/components/FormInput";
import { FaEyeSlash } from "react-icons/fa";
import { log } from "console";
import Image from "next/image";

const Home = () => {
  //useEffect

  //Create ref object (useRef)
  const passwordRef = useRef<HTMLInputElement>(null);

  //Decalare useState (useState)
  const [count, setCount] = useState<number>(0);
  //count = array[0], setCount = array[1];

  //--------------------------------------------
  const onIcrement = () => {
    const result = count + 1;
    setCount(result); //Memperbarui data pada state count melalui fungsi setCount
  };

  //--------------------------------------------
  const [inputValue, setInputValue] = useState<string>("");
  const onHandleInput = (e: any) => {
    // console.log(e.target.value);
    setInputValue(e.target.value);
  };

  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [data, setData] = useState<any[]>([]);

  const onHandleAge = (e: any) => {
    setAge(e.target.value);
  };
  const onHandleEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const onSave = (e: any) => {
    //Cara 1
    // const temp = [...data];
    // temp.push({name, age, email})
    // setData(temp);
    //Cara 2
    // setData([...data, { name, email, age }]);

    if (passwordRef.current) {
      console.log("ref from password input: ", passwordRef.current.value);
    }
  };

  const [user, setUser] = useState<{
    name: string;
    age: string;
    email: string;
  }>({ name: "", age: "", email: "" });

  const printData = () => {
    return data.map((value: any, index: any) => {
      return (
        <tr key={`${value}-${index}`} className="border border-collapse">
          <td className="text-center border border-collapse">{index + 1}</td>
          <td className="text-center border border-collapse">{value.name}</td>
          <td className="text-center border border-collapse">{value.age}</td>
          <td className="text-center border border-collapse">{value.email}</td>
          <td className="text-center border border-collapse">
            <button type="button" className="bg-slate-300 rounded-md">
              Edit
            </button>
            <button type="button" className="bg-red-500 rounded-md">
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };

  const [password, setPassword] = useState<any>("");
  const onHandlePassword = (e: any) => {
    setPassword(!password);
    console.log(password);
  };

  return (
    <div className="w-1/2 m-auto border border-red-600">
      <h1 className="text-5xl text-center uppercase">Management Data</h1>
      <div className="hidden">
        {/** Display data from state */}
        <h1 className="text-9xl">{count}</h1>
        <button
          type="button"
          className="bg-gray-300 p-2 rounded-md"
          onClick={onIcrement}
        >
          Increment
        </button>

        {/**-------------------------*/}
        <div>
          <input
            type="text"
            placeholder="Type something"
            className="p-2 border"
            onChange={onHandleInput}
          />
          <span>{inputValue}</span>
        </div>
      </div>
      <div id="form-data" className="flex flex-col gap-3">
        <FormInput
          onChange={(e: any) => {
            setUser({ ...user, name: e.target.value });
          }}
          type="text"
          label="Fullname"
          placeholder="Type your name"
        />
        <FormInput
          onChange={(e: any) => {
            setUser({ ...user, age: e.target.value });
          }}
          type="number"
          label="Age"
          placeholder="Type your age"
        />
        <FormInput
          onChange={(e: any) => {
            setUser({ ...user, email: e.target.value });
          }}
          type="email"
          label="Email"
          placeholder="Type your email"
        />
        <div className="flex">
          <FormInput
            ref={passwordRef}
            type="password"
            label="Password"
            placeholder="Type your password"
          />
        </div>

        <button
          className="bg-slate-300 rounded-md"
          type="button"
          onClick={onSave}
        >
          Save
        </button>
      </div>
      <div className="flex flex-col gap-4">
        <span>{name}</span>
        <span>{age}</span>
        <span>{email}</span>
      </div>
      <div>
        <table className="w-full border border-collapse mt-5">
          <thead>
            <tr>
              <th className="border border-collapse text-center">No</th>
              <th className="border border-collapse text-center">Name</th>
              <th className="border border-collapse text-center">Age</th>
              <th className="border border-collapse text-center">Email</th>
              <th className="border border-collapse text-center">Action</th>
            </tr>
          </thead>
          <tbody>{printData()}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
