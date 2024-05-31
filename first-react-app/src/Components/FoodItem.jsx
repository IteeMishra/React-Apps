import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./FoodItem.module.css";
const FoodItem = (props) => {
  //This is how we are handling an onclick event
  const handleFunctionForOnClick = (value,event) => 
    {
    console.log(`${value} is been bought`);
    console.log(event);
    //yeh target.value humne jab console me event yahi second line se jo input mil raha usse expan kiya toh pata chala ki aisa kuch bhi hota hai 

    console.log(event.target.value);
  };

  
  return (
    <>
      <li className={styles.listItem} key={props.itemname}>
        {props.itemname}{" "}
        <button
          className={`${styles.button} btn btn-primary`}
          onClick={(event) => { //by default an event parameter is generated its a synthetic base object in React that has many information stored in it 
            handleFunctionForOnClick(props.itemname,event);
          }}
        >
          Buy
        </button>
      </li>
    </>
  );
};

export default FoodItem;
