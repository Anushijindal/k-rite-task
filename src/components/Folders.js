import React, { useState } from "react";
// import Products from "./Products";
import { useDispatch } from "react-redux";
import { changeData } from "../utils/dataSlice";

const Folders = () => {
  const [showFolder, setShowFolder] = useState(false);
  const [showSub, setShowSub] = useState(false);
//   const [showProduct, setShowProduct] = useState('');
  const dispatch=useDispatch();
  const handleShow = () => {
    setShowFolder(!showFolder);
  };
  const handleShowSub = () => {
    setShowSub(!showSub);
  };
  const handleProduct=()=>{
    dispatch(changeData("Products"))
  }
  const handleSales=()=>{
    dispatch(changeData("Sales"))
  }
  const handleDesign=()=>{
    dispatch(changeData("Design"))
  }
  const handleLegal=()=>{
    dispatch(changeData("Legal"))
  }
  const handleOffice=()=>{
    dispatch(changeData("Office"))
  }
  return (
    <div className="mt-3 mx-2 rounded-md border-2 border-gray-100">
      <div className="flex flex-row justify-between mx-4 my-1">
        <h1>Folders</h1>
        <button onClick={handleShow}>{showFolder ? "-" : "+"}</button>
      </div>
      {showFolder && (
        <div className="ml-10 mx-4 border-l-2 pl-2 border-gray-100 mb-3">
          <div className="">
          <div className="flex flex-row justify-between hover:bg-gray-300 rounded-md px-1">
            <h1 ><button onClick={handleProduct} >📁Products</button></h1>
            <button onClick={handleShowSub}>{showSub ? "-" : ">"}</button>
            </div>
            {showSub && (
              <div className="ml-12 border-l-2 pl-2 border-gray-100">
                <h1>Roadmap</h1>
                <h1>FeedBack</h1>
                <h1>Performance</h1>
                <h1>Team</h1>
                <h1>Analytics</h1>
                <button className="text-gray-500">+ Add new sub</button>
              </div>
            )}
          </div>
          <h1 className="hover:bg-gray-300 rounded-md px-1"><button onClick={handleSales}>📁Sales</button></h1>
          <h1 className="hover:bg-gray-300 rounded-md px-1"><button onClick={handleDesign}>📁Design</button></h1>
          <h1 className="hover:bg-gray-300 rounded-md px-1"><button onClick={handleOffice}>📁Office</button></h1>
          <h1 className="hover:bg-gray-300 rounded-md px-1"><button onClick={handleLegal}>📁Legal</button></h1>
        </div>
      )}
    </div>
  );
};

export default Folders;
