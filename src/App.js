import { useEffect, useState } from "react";
import './app.css'

function App() {

  document.getElementById("root").addEventListener("click", () => window.location.reload());
  const [colors, setColors] = useState([])
  
  useEffect(() => {
    const loadApi =  () => {

      let url = "https://www.colourlovers.com/api/palettes/random?format=json"

    fetch(url, {
      headers: {
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*"      
    }})
    .then((res) => res.json())
    .then((json) =>  !json.length === 5 ? loadApi() : setColors(json[0].colors)); 
    

  }
  loadApi();

}, [])

  return (
    <>
    <div className="App">

      <h1>Clique em qualquer lugar para gerar uma nova paleta</h1>
        <div className="container">
          <div className="column" style={{ "backgroundColor": `#${colors[0]}`}}><strong>#{colors[0]}</strong></div>
          <div className="column" style={{ "backgroundColor": `#${colors[1]}`}}><strong>#{colors[1]}</strong></div>
          <div className="column" style={{ "backgroundColor": `#${colors[2]}`}}><strong>#{colors[2]}</strong></div>
          <div className="column" style={{ "backgroundColor": `#${colors[3]}`}}><strong>#{colors[3]}</strong></div>
          <div className="column" style={{ "backgroundColor": `#${colors[4]}`}}><strong>#{colors[4]}</strong></div>
        </div>
      

    </div>
  </>
  );
}

export default App;
