import Gym from "./Gym";

function Favorites({gyms,kriterijum}) {
    return (
    <div className="favorites">
    <div className="row">
        {kriterijum===""
        ?
        gyms.map((gym)=> <div className="col-sm-3"><Gym  key={gym.id} gym={gym}></Gym><br /></div>)
        :
        <>
        {gyms
        .filter((gym)=>gym.naziv.toLowerCase().includes(kriterijum.toLowerCase()))
        .map((gym)=> <div className="col-sm-3"><Gym  key={gym.id} gym={gym}></Gym><br /></div>)}

        </>
        }

      </div>
      </div>
    );
  }

  export default Favorites;