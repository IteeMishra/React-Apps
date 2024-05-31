import styles from "./ItemValue.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Values(props) {
    let xyz=props.v;
    console.log("this is " + xyz);
  return (
    <div className={`container text-center ${styles.inner} ${styles.flex}`}>
      <div className="row">
        <div className="col-6">{xyz[0]}</div>

        <div className="col-4">{xyz[1]}</div>

        <div className={`col-2 ${styles.display}`}>
          <button type="button" className={`btn btn-danger ${styles.button}`}
          
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default Values;
