import { useParams } from "react-router-dom";
import Data from "../data"
import {Link} from "react-router-dom"

export default function EmployeePage(props) {
    const {id} = useParams()
    return (
        <div>
            <Link to="/">
            <button className="backbutton">Back to Home</button>
            </Link>
            <img src={Data[id].img} alt={Data[id].img} />
            <p>{Data[id].name}</p>
            <h4>{Data[id].title}</h4>
             <h3>Call Office</h3>
            <p>{Data[id].office}</p>
             <h3>Call Mobile</h3>
            <p>{Data[id].mobile}</p>
            <h3>SMS</h3>
            <p>{Data[id].sms}</p>
            <h3>Email</h3>
            <p>{Data[id].email}</p>
        </div>
    )
}