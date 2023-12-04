import Gym from "./Gym";

function Favorites({gyms,kriterijum, izbaci}) {
    return (
    <div className="favorites">
    <div className="row" style = {{display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
        {kriterijum===""
        ?
        gyms.map((gym)=> <div className="col-sm-3">
            <Gym  key={gym.id} gym={gym} mod={2} izbaci={izbaci}></Gym><br /></div>)
        :
        <>
        {gyms
        .filter((gym)=>gym.naziv.toLowerCase().includes(kriterijum.toLowerCase()))
        .map((gym)=> <div className="col-sm-3">
            <Gym  key={gym.id} gym={gym} mod={2} izbaci={izbaci}></Gym><br /></div>)}

        </>
        }

      </div>
      </div>
    );
  }

  export default Favorites;