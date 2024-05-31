import styles from "./Food.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItem from "./FoodItem";

const Food = () => {
  const foodItems = ["sabzi", "dal", "paratha", "vege", "salad"];

  return (
    <div className={styles.food}>
      <h1 className={styles.header}>Food items</h1>
      
      <input className={styles.inputwala} type="text" placeholder="using it to see onChange event Handler"
      onChange={(event)=>{
      console.log(event);
     
      //event print hua console pe toh dekha usme bahut saare parameters the jaise target
      console.log(event.target);
      //target me bhi bahut saare the jaise value yeh dikha raha tha ki kya input hua

        console.log(event.target.value);
      //hum iss event k liye bhi alag se function bana k kar sakte the jaise humne onclik me kiya ths
       //always try ki alag he banao function
       //jo functionality contaain kar raha aur yaha event handlers me unhe pas karo
      }}

      // agar hum yahi event handlers functions ko parent se  as parameter yahi 
      //props ki tareh bhejte toh vo kehlata child to parent communication kyuki yaha
      //child component me jab bhi koi harkat hogi toh what to do k liyye vo 
      //parent wale function ko call kar raha hai and most of thee caes me yahi hoga he 

      //so have a habit ki karo bhi yahi koi badi chiz nhi hai bas bda bada bata rahe


      ></input>
      
      <ul class="list-group">
        {foodItems.map((foodname) => (
          <FoodItem  itemname={foodname}></FoodItem>
        ))}
      </ul>
    </div>
  );
};

export default Food;
