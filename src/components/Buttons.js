import satData from "./satData";


const Buttons = ({ setSat, displaySats, filterByType }) => {

  {
    displaySats.map((id, sat) => {
      return (
        <>
          <button key={id} onClick={() => filterByType(sat)}>{sat}
           Orbit
          </button>
          
          <button onClick={() => setSat(satData)}>Try me!</button>
      </>
      );

    }
   )}
}
export default Buttons;


