import { useDispatch } from "react-redux";

export default function Controls() {

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };
  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  return (
    <div style={{display:"flex", alignItems:"center" , justifyContent:"space-around"}}>
      <button
        type="button"
        className="btn btn-warning"
        style={{ margin: "40px" }}
        onClick={handleIncrement}
      >
        Increment By One (+1)
      </button>
      <button
        type="button"
        className="btn btn-warning"
        style={{ margin: "40px" }}
        onClick={handleDecrement}
      >
        Decrement by One (-1)
      </button>
    </div>
  );
}
