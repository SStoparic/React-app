import Gym from "./Gym";

function Gyms({gyms}) {
    return (
        <div className="gyms">
        <div className="row" style = {{display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
        {gyms.map((gym)=> <div className="col-sm-3"><Gym  key={gym.id} gym={gym}></Gym><br /></div>)}
    </div>
    </div>
    );
  }

  export default Gyms;