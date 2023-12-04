
function Gym({gym, dodaj}) {


    return (
    <div className="card"   >
        <img src={gym.slika} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{gym.naziv}</h5>
          <p className="card-text">ADDRESS: {gym.adresa} <br /> MONTHLY PRICE: {gym.cena + "din"} <br /> 
            SIZE OF GYM: {gym.povrsina + "m2"}</p>
            <button className="btnDodaj" onClick={()=>dodaj(gym.id)}> ADD TO FAVORITES </button>
        </div>
      </div>
    );
  }

  export default Gym;