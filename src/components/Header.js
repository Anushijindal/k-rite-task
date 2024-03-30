import React from "react";
import Team from "./Team";
import Folders from "./Folders";
import { useDispatch } from "react-redux";
import { changeData } from "../utils/dataSlice";

const Header = () => {
  const dispatch=useDispatch();
  const handleClick=(data)=>{
    dispatch(changeData(data))
  }
  return (
    <div>
      <div className="flex flex-row justify-between mt-3 mx-1">
        <div className="flex flex-row">
          <img
            className="rounded-lg w-10 "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqKbrUf81xnharoRZ8aG9taQt1eYgxeu4niQ&s"
            alt="logo"
          />
          <div className="ml-3">
            <h4>INC</h4>
            <h4>InnovateHub</h4>
          </div>
        </div>
        <img
          className="rounded-full w-12"
          alt="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8DQxe81eoqKqDTrZE7J3tC71nhyTFV2F2og&s"
        />
      </div>
      <Team />
      <Folders />
      <div className="m-2 mt-44 ">
        <h1 className="rounded-md border-2 border-gray-100 py-1 my-1" onClick={()=>handleClick("Invite")}>👥Invite Teammates</h1>
        <h1 className="rounded-md border-2 border-gray-100 py-1 my-1" onClick={()=>handleClick("Help")}>❓Help and first steps</h1>
        <div className="flex flex-row justify-between border-2 border-gray-100 py-1">
          <h1>
            <span className="rounded-3xl w-10 m-2 border-2 border-black">7</span>days left on trial
          </h1>
          <button className="bg-black rounded-xl px-2 text-white">Add biling</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
