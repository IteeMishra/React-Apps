import styles from "./TestUseState.module.css";
import {useState} from "react";
const TestuseState=()=>{
let textArr=useState("This is where the text is going to change");
let textState=textArr[0];
let settextState=textArr[1];
    return <>
    <div className={styles.div}>
        <h1>UseState() Tester</h1>
    <input type="text" className={styles.input} placeholder="type here to see how useState() words"    
    onChange={((event)=>{
        console.log(event.target.value);
        //we are using it to change the current start function to the value we are 
        //entering into input
        //this is not possible without useState() hook
        //directly karte ki hum <p> ki value change kare toh nhi hota
        settextState(event.target.value);

    })}
    ></input>
    <p>{textState}</p>
    </div>
    </>

}
export default TestuseState;