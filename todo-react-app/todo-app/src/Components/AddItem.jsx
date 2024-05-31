import styles from "./AddItem.module.css";
import {useState} from "react";
function AddItem({ValuesSentToParent}) {

let [currValue,setCurrValue]=useState("");
let [currDate,setCurrDate]=useState("");


  return (
    <div className={`container text-center ${styles.inner} ${styles.top}`}>
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Your Tasks!"
            className={styles.input}
          
            onChange={(event)=>{
               setCurrValue(event.target.value);
               console.log(currValue);
            }}

          ></input>
        </div>
        <div className="col-4">
          <input type="date" className={styles.input}
          onChange={(event)=>{
            setCurrDate(event.target.value);
            console.log("From AddItem.jsx" + currValue+"\n");
         }}

          ></input>
        </div>
        <div className="col-2">
          <button type="button" className={`btn btn-success ${styles.button}`}
          onClick={()=>{
            ValuesSentToParent(currValue,currDate);
            console.log("From AddItem.jsx" + currDate +"\n");
          }}
          
          >
            Add item
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddItem;