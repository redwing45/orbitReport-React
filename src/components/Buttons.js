import satData from "./satData";


const Buttons = ({ setSat, displaySats, filterByType }) => {

  return(
    <div>
      {displaySats.map((id,sat) => {
        return(
          <button onClick={() => filterByType(sat)} key={id}>
           {sat} Orbit
          </button>

        );
      })}
      <button onClick={() => setSat(satData)}>
        All Orbits
      </button>
    </div>
  );

};
export default Buttons;


