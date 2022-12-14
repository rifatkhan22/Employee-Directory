import Employeelistitem from "./Employeelistitem";
import Employeedata from "../data";
import {Link} from "react-router-dom"

const employees = Employeedata.map((ele, index) => {
  return (
    <Link to = {`/employee/${index}`}>
    <Employeelistitem key={index} {...ele} />
    </Link>
    )
});

export default function Employeelist(props) {
  return (
    <div>
      <section className="list">{employees}</section>
    </div>
  );
}