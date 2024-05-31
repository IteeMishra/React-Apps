import styles from "./ItemValue.module.css";
import { useState } from "react";
import Values from "./Values";


const ItemValue = ({ Display }) => {
  //isme data aa raha
  let value = Display[0];
  let date = Display[1];
  console.log({ Display });
  console.log(value + " :yeh ");
  console.log(`Sab aata hai apne ko : ${value} and date is ${date}`);

  let valuesArray = [
    ["Buy Clothes", "04/12/2023"],
    ["Go To Gym", "04/12/2023"],
  ];

  valuesArray = [...valuesArray,[value,date]];

  //   let [val, setval] = useState(valuesArray);
  //   let [dat, setdat] = useState(dateArray);
  // let newvaluesArray = [...valuesArray, value];
  //   setval(newvaluesArray);
  // let newdateArray = [...dateArray, date];
  //   setdat(newdateArray);

  return (
    <>
      {valuesArray.map((v) => (
        <Values v={v}></Values>
      ))}
    </>
  );
};

export default ItemValue;
