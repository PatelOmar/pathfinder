import { useState, useEffect } from "react";
import Grid from './components/Grid'

function App() {
  const [grid, setGrid] = useState([{}]);
  useEffect(() =>{
    gridCells = [...grid]
    for (let i=0; i<= 10; i++){

    }
  },[]);
  return (
    <Grid />
  );
}

export default App;
