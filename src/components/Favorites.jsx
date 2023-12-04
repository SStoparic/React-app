import Gym from "./Gym";

function Favorites({gyms,kriterijum}) {
    return (
    <div className="row">
        {kriterijum===""
        ?
        gyms.map((rec)=> <div className="col-sm-3"><Gym  key={rec.id} rec={rec}></Gym><br /></div>)
        :
        <>
        {gyms
        .filter((rec)=>rec.naziv.toLowerCase().includes(kriterijum.toLowerCase()))
        .map((rec)=> <div className="col-sm-3"><Gym  key={rec.id} rec={rec}></Gym><br /></div>)}

        </>
        }

      </div>
    );
  }

  export default Favorites;