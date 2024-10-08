
import { adatLISTA } from './adatok';
import './App.css';
import {useState} from "react"
import Kartyak from './components/Kartyak';

function App() {
  // state az egy változó a program állapotát írja le, use Stee függvénnyel tudjuk beállítani az értékékét
  //const kivalasztLista=[]
  const [kivalasztottLista,setKivalsztottLista]=useState([])
  function kattkezApp(adat){
    console.log("app",adat)
    const ujLista=[...kivalasztottLista]
    ujLista.push(adat)
    setKivalsztottLista.push([...ujLista])
    console.log(kivalasztottLista)
  }
  return (
    <div className="App">
      <header className="App-header">
       Hurrá react
      </header>
      <article>
        <Kartyak lista={adatLISTA} kattkezApp={kattkezApp}/>
        
      </article>
      <aside>
        <h3>Kiválasztott könyvek</h3>
        <Kartyak lista={kivalasztottLista} kattkezApp={kattkezApp}/>
      </aside>
      <footer>Dorka</footer>
    </div>
  );
}

export default App;
