import styles from "./ItemValue.module.css";
import { useState } from "react";
const ItemValue = ({ Display }) => {
  //isme data aa raha
  let value = Display[0];
  let date = Display[1];
  console.log({Display});
  console.log(value +" :yeh ");
  console.log(`Sab aata hai apne ko : ${value} and date is ${date}`);

  let valuesArray = ["Buy Clothes", "Go To Gym"];
  let dateArray = ["04/12/2023", "04/12/2023"];

//   let [val, setval] = useState(valuesArray);
//   let [dat, setdat] = useState(dateArray);
// let newvaluesArray = [...valuesArray, value];
//   setval(newvaluesArray);
// let newdateArray = [...dateArray, date];
//   setdat(newdateArray);

  return (
    <>
      <div className={`container text-center ${styles.inner} ${styles.flex}`}>
        <div className="row">
          <div className="col-6">
         
          </div>
          <div className="col-4"> 
        
          </div></div>
          <div className={`col-2 ${styles.display}`}>
            <button type="button" className={`btn btn-danger ${styles.button}`}>
              Delete
            </button>
          </div>
        </div>
      
    </>
  );
};

export default ItemValue;
