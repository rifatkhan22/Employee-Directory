import './App.css';
import Homepage from "./components/Homepage"
import {Route, Routes} from "react-router-dom"
import EmployeePage from "./pages/EmployeePage"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/" element={<Homepage/>} />
        <Route path = "/employee/:id" element={<EmployeePage/>} />
      </Routes>
    </div>
  );
}

export default App;
