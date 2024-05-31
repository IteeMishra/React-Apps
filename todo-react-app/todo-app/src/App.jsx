import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";
import Header from "./Components/Header";
import AddItem from "./Components/AddItem";
import ItemValue from "./Components/ItemValue";
import { useState } from "react";
function App() {
let [val,setval]=useState("");
let [dat,setdat]=useState("");
 
  function ValuesSentToParent(value,date){
     setval(value);
     setdat(date);
      console.log(`From App.jsx : ${val} and  date is ${dat}  itee`);
  }
  console.log(`From App.jsx : ${val} and  date is ${dat}  itee2`);
  
  return (

    <div className={styles.mainDiv}>

      <Header></Header>

     <AddItem ValuesSentToParent={ValuesSentToParent}></AddItem>

     <ItemValue Display={[val,dat]}></ItemValue>
    </div>
  );
}
export default App;
