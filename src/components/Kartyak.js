import Kartya from "./Kartya"

export default function Kartyak(props){
    return(
        <>
        {props.lista.map((elem, index) =>{
          return(<Kartya obj={elem} key={index}/>) 
        })
      }
        </>
    )
}