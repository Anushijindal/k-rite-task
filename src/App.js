import { useSelector } from "react-redux";
import Header from "./components/Header";
// import MainContainer from "./components/MainContainer";
import Products from "./components/Products";
import Office from "./components/Office";
import Legal from "./components/Legal";
import Sales from "./components/Sales";
import Designs from "./components/Designs";
import DesignTeam from "./components/DesignTeam";
import MarketingTeam from "./components/MarketingTeam";
import DevelopmentTeam from "./components/DevelopmentTeam";
import Invite from "./components/Invite";
import Help from "./components/Help";
import Bill from "./components/Bill";
function App() {
  const data=useSelector(store=>store.data.value);
  console.log(data)
  return (
    <div className="font-semibold flex flex-row">
      <div className="sticky w-1/5 h-full border-gray-200 border-2 shadow-md m-2">
        <Header />
      </div>
      {
        data==="Invite" && 
        <div className="w-4/5 h-full border-gray-200 border-2 shadow-md m-2">
        <Invite/>
        </div> || data==="Help" &&
        <div className="w-4/5 h-full border-gray-200 border-2 shadow-md m-2">
        <Help/>
        </div> ||  data==="Design Team" && 
        <div className="w-4/5 h-full border-gray-200 border-2 shadow-md m-2">
        <DesignTeam/>
        </div> || data==="Marketing Team" && 
        <div className="w-4/5 h-full border-gray-200 border-2 shadow-md m-2">
        <MarketingTeam/>
        </div> || data==="Development Team" && 
        <div className="w-4/5 h-full border-gray-200 border-2 shadow-md m-2">
        <DevelopmentTeam/>
        </div>  || data==="Office" && 
        <div className="w-4/5 h-full border-gray-200 border-2 shadow-md m-2">
        <Office/>
        </div> || data==="Legal" && 
        <div className="w-4/5 h-full border-gray-200 border-2 shadow-md m-2">
        <Legal/>
        </div> || data==="Design" && 
        <div className="w-4/5 h-full border-gray-200 border-2 shadow-md m-2">
        <Designs/>
        </div> || data==="Sales" && 
        <div className="w-4/5 h-full border-gray-200 border-2 shadow-md m-2">
        <Sales/>
        </div> ||  data==="" &&
        <div className="w-4/5 h-full border-gray-200 border-2 shadow-md m-2">
        <h1>Welcome to InnovateHub! Press components for data</h1>
        </div> || data==="Products" && 
        <div className="w-4/5 h-full border-gray-200 border-2 shadow-md m-2">
        <Products/>
        </div>
      }
      
    </div>
  );
}

export default App;
