import Employeelist from "./Employeelist";
import Header from "./Header";
import Searchbar from "./Searchbar";

export default function Homepage(props) {
  return (
    <div>
      <Header/>
      <Searchbar/>
      <Employeelist/>
    </div>
  );
}