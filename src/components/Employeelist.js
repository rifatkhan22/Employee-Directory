import Employeelistitem from "./Employeelistitem";
import Employeedata from "../data";

const employees = Employeedata.map((ele, index) => {
  return <Employeelistitem key={index} {...ele} />;
});

export default function Employeelist(props) {
  return (
    <div>
      <section className="list">{employees}</section>
    </div>
  );
}