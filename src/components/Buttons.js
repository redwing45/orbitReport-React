import satData from "./satData";
import App from "../App";


const Buttons = () => {
  <>
   { displaySats.map((id,sat) => {
  return (
    <div>
      <button key ={id} onClick={filterByType()}>{sat} Orbit  </button>
      </div>
  );
    })}

    <button onClick={setSat(satData)}></button>
      <button onClick={displaySats}>All Orbits</button>
      <button>All Orbits</button>
  
</>
}
export default Buttons;


