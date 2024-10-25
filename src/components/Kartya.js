import { useContext } from "react";
import "../css/Kartya.css";
import { KattContext } from "../context/KattContext";

export default function Kartya(props){

    const {katt} =useContext(KattContext)
    function kattintas(){
        katt(props.obj)
    }
    return (
        <div className="card">
            <h3>{props.obj.cim}</h3>
            <p>{props.obj.leiras}</p>
            <button onClick={()=>{kattintas()}}>Kiválaszt</button>
        </div>
    )
}