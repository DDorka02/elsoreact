
import { useContext } from 'react';
import { adatLISTA } from './adatok';
import './App.css';
import Kartyak from './components/Kartyak';
import { KattContext } from './context/KattContext';

function App() {
  const {kivalasztottLista} = useContext(KattContext)

  return (
    <div className="App">
      <header className="App-header">
       Hurrá react
      </header>
      <article>
        <Kartyak lista={adatLISTA}/>
        
      </article>
      <aside>
        <h3>Kiválasztott könyvek</h3>
        <Kartyak lista={kivalasztottLista}/>
      </aside>
      <footer>Dorka</footer>
    </div>
  );
}

export default App;
