import Gym from "./Gym";

function Gyms({gyms, kriterijum, dodaj}) {
    return (
        <div className="gyms">
        <div className="row" style = {{display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
        {
        kriterijum===""
        ?
        gyms.map((gym)=> <div className="col-sm-3"><Gym  dodaj={dodaj} key={gym.id} gym={gym}></Gym><br /></div>)
        :
        <>
        {gyms
        .filter((gym)=>gym.naziv.toLowerCase().includes(kriterijum.toLowerCase()))
        .map((gym)=> <div className="col-sm-3"><Gym  dodaj={dodaj} key={gym.id} gym={gym}></Gym><br /></div>)}

        </>
        }
       
    </div>
    </div>
    );
  }

  export default Gyms;