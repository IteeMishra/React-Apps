import { useSelector } from "react-redux";

export default function DisplayCounter() {
  const counter = useSelector((store) => store.counter);

  return (
    <h4 className="card-text text-center">
      Some quick example text to build on the card title and make up the bulk of
      the card's content: <br></br> <b>{counter}</b>
    </h4>
  );
}
