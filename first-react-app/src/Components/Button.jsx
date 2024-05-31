import styles from "./Button.module.css";

function Button({ btnValue }) {
  const handlefunction = (btnValue, buttonvalue) => {
    //sending buttonValue ie the button that has been clicked into 
    //the parent components
    btnValue(buttonvalue);
    console.log(buttonvalue);
    // btnValue(buttonvalue);
  };
  const buttonlist = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <>
      {buttonlist.map((buttonvalue) => (
        <button
          className={styles.button}
          key={buttonvalue}
          onClick={() => handlefunction(btnValue, buttonvalue)}
        >
          {buttonvalue}
        </button>
      ))}
    </>
  );
}

export default Button;
