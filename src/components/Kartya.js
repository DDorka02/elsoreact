import "../css/Kartya.css";

export default function Kartya(props){
    function kattkezKartya(){
        console.log("kartya",props.obj)
        props.kattkezKartyak(props.obj)
    }
    return (
        <div className="card">
            <h3>{props.obj.cim}</h3>
            <p>{props.obj.leiras}</p>
            <button onClick={()=>{kattkezKartya()}}>Kiválaszt</button>
        </div>
    )
}