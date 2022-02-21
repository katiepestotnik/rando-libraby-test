import Home from './components/Home'
import './App.css';
import Rando from "js-rando";
let rando = new Rando()
function App() {
  let num = rando.Random()
  let colorHex = rando.RandomHexColor()
  const divStyle = {
    backgroundColor: colorHex
  }
  console.log(typeof(colorHex))
  return (
    <div style={divStyle} className="App">
      <div>{colorHex}</div>
      <Home/>

    </div>
  );
}

export default App;
