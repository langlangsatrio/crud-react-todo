"use-client";
import React, { useState } from "react";

interface IFormInput {
  label?: string;
  type: string;
  placeholder?: string;
  onChange?: (e: any) => void;
  ref?: any;
}

const FormInput: React.FC<IFormInput> = ({
  label,
  type,
  placeholder,
  onChange,
  ref,
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  if (type === "password") {
    let icon;
    let activeType;
    if (isVisible) {
      icon = "";
      activeType = "text";
    } else {
      icon = "";
      activeType = "password";
    }

    return (
      <div className="flex flex-col gap-2">
        <label className="font-bold">{label}</label>
        <div className="relative">
          <input
            ref={ref}
            type={activeType}
            placeholder={placeholder}
            className="border border-gray-400 p-2 rounded-lg shadow-lg"
            onChange={onChange}
          />
          <button
            onClick={() => {
              setIsVisible(!isVisible);
            }}
          >
            button
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-2">
      <label className="font-bold">{label}</label>
      <div className="relative">
        <input
          type="text"
          placeholder={placeholder}
          className="border border-gray-400 p-2 rounded-lg shadow-lg"
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default FormInput;
