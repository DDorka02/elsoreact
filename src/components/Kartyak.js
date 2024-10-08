import Kartya from "./Kartya"

export default function Kartyak(props){
    function kattkezKartyak(adat){
        console.log("kartyak",adat)
        props.kattkezApp(adat)
    }
    return(
        <>
        {props.lista.map((elem, index) =>{
          return(<Kartya obj={elem} key={index} kattkezKartyak={kattkezKartyak}/>) 
        })
      }
        </>
    )
}