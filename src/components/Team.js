import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeData } from "../utils/dataSlice";

const Team = () => {
  const [val, setVal] = useState([]);
  const dispatch=useDispatch();
  const handleAdd = () => {
    const arr = [...val, []];
    setVal(arr);
  };
  const handleChange = (e, i) => {
    const inputData = [...val];
    inputData[i] = e.target.value;
    setVal(inputData);
  };
  const handleDelete = (i) => {
    const deleteVal = [...val];
    deleteVal.splice(i, 1);
    setVal(deleteVal);
  };
  const handleTeam=(data)=>{
    dispatch(changeData(data))
  }
  return (
    <div className="m-2 mt-10">
      <div className="border-2 border-gray-100 p-1 m-1 rounded-md flex flex-row justify-between">
        <h1 onClick={()=>handleTeam("Design Team")}>Design Team</h1>
        <button className="border-2 border-gray-100 w-7">x</button>
      </div>
      <div className="border-2 border-gray-100 p-1 m-1 rounded-md flex flex-row justify-between">
        <h1 onClick={()=>handleTeam("Marketing Team")}>Marketing Team</h1>
        <button className="border-2 border-gray-100 w-7">x</button>
      </div>
      <div className="border-2 border-gray-200 p-1 m-1 rounded-md flex flex-row justify-between">
        <h1 onClick={()=>handleTeam("Development Team")}>Development Team</h1>
        <button className="border-2 border-gray-100 w-7">x</button>
      </div>
      {val.map((data, i) => {
        return (
          <div key={i} className="border-2 border-gray-100 p-1 m-1 rounded-md flex flex-row justify-between">
            <input value={data} onClick={()=>handleTeam(data)} onChange={(e) => handleChange(e, i)} />
            <button
              className="border-2 border-gray-100 w-7"
              onClick={() => handleDelete(i)}
            >
              x
            </button>
          </div>
        );
      })}
      <button
        className="mt-2 border-2 border-gray-100 p-1 w-full mr-2 rounded-md text-gray-500"
        onClick={() => handleAdd()}
      >
        + Create a Team
      </button>
    </div>
  );
};

export default Team;
