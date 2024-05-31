import "./App.css";
import Header from "./Components/Header";
import Display from "./Components/Display";
import Button from "./Components/Button";
import Food from "./Components/Food";
import TestUseState from "./Components/TestUseState";
import { useState } from "react";

function App() {
  const date = new Date();
  const [currDisplayValue, setcurrDisplayValue] = useState("");

 const togetandget=(buttonValueGetting) => {

  if(buttonValueGetting==='C'){
   setcurrDisplayValue("");
  }
 else if(buttonValueGetting==='='){
        const result=eval(currDisplayValue);
       setcurrDisplayValue(result);
     
  }
  else{
  const newvalue=currDisplayValue+buttonValueGetting;
  setcurrDisplayValue(newvalue);
  }
  // console.log("heelo" + buttonValueGetting);
}
  return (
    <>
      <div className="Calculator">
        <Header></Header>
        <div>
          <Display calVal={currDisplayValue}></Display>
        </div>
        <div className="ButtonList">
          <Button
            btnValue={togetandget}
          ></Button>
        </div>
      </div>
      <br />
      <br />

      <TestUseState></TestUseState>

      <div className="Calculator">
        <center>
          <h1>Bharat Clock</h1>
        </center>
        <p>This is the clock that shows time in Bharat at all times.</p>
        <p>
          This is the current time :{date.toLocaleDateString()} -{" "}
          {date.toLocaleTimeString()}{" "}
        </p>
      </div>
      <Food></Food>
    </>
  );
}

export default App;
