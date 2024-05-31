import styles from "./Display.module.css";

function Display({calVal}) {
  //readonly laga k hum kewal input box se read kar payenge write nhi

  return (
    <input
      type="text"
      readOnly
      className={styles.display}
     value={calVal}
    ></input>
  );
}
export default Display;
