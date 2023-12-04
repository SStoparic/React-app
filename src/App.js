import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Gyms from './components/Gyms';
import { useState } from 'react';
import Favorites from './components/Favorites';

function App() {

  const [favoriteGyms,setFavoriteGyms]=useState([]);

  const[allGyms] = useState([

    {
      id:1,
      naziv:"NON STOP FITNESS",
      slika: "https://nonstopfitness.rs/wp-content/uploads/2020/04/NSF-Banovo-brdo-1-1.jpg",
      adresa: "Rudnicka 1",
      cena: 3000,
      povrsina: 400,
      favorite: 0

    },
    {
      id:2,
      naziv:"AHILEJ GYM",
      slika: "https://www.ahilej.com/storage/location/gallery/XFNLDVTOkhRALx9y377pgIF8PujuX1RhOJFuuj9f.jpeg",
      adresa:"Vojvode Stepe 207 ",
      cena: 4600,
      povrsina: 200,
      favorite: 0

    },
    {
      id:3,
      naziv:"IRON REPUBLIC GYM",
      slika: "https://nyamie.com/uploads/photos/medium/Entity-1X3RMjPCS7feyCZv.jpg",
      adresa:"Nehurova 51",
      cena: 4000,
      povrsina: 500,
      favorite: 0
    },
    {
      id:4,
      naziv:"MEGA GYM",
      slika: "https://megagym.rs/wp-content/uploads/2023/09/DMP_0010-min.webp",
      adresa:"Omladinskih Brigada 65a",
      cena: 4000,
      povrsina: 450,
      favorite: 0
    },
    {
      id:5,
      naziv:"ATHLETIC'S GYM",
      slika: "https://www.srfs.org.rs/wp-content/uploads/2021/01/zenska-teretana-beograd-vozdovac-1024x683.jpg",
      adresa:"Vojvode Stepe 363",
      cena: 3500,
      povrsina: 300,
      favorite: 0
    },
    {
      id:6,
      naziv:"SPORTS ACADEMY KOCOVIC",
      slika: "https://kocovic.rs/galleries/blokovi/5.jpg",
      adresa:"Crnotravska 4",
      cena: 5000,
      povrsina: 500,
      favorite: 0
    },
    {
      id:7,
      naziv:"MUSCLE BEACH",
      slika: "https://www.muscle-beach.rs/assets/gallery/gallery-5.png",
      adresa:"Bulevar Milutina Milankovića 9đ",
      cena: 3400,
      povrsina: 350,
      favorite: 0
    }
  ])

  const [krterijumPretrage,setKriterijumPretrage]=useState("");

  function pretrazi(kriterijum){
    setKriterijumPretrage(kriterijum);
  }

  //funkcija za dodavanje u omiljenje
  function dodaj(id){
    for(var i=0;i<allGyms.length;i++){
      if(allGyms[i].id===id){
        allGyms[i].favorite=1;
      }
    }
    var niz = allGyms.filter((gym)=>gym.favorite===1);
    setFavoriteGyms(niz);
  }

  //funkcija za izbacivanje iz omiljenih
  function izbaci(id){
    for(var i=0;i<allGyms.length;i++){
      if(allGyms[i].id===id){
        allGyms[i].favorite=0;
      }
    }
    var niz = allGyms.filter((gym)=>gym.favorite===1);
    setFavoriteGyms(niz);
  }

  

  return (
   <div>
    <BrowserRouter>
        <NavBar pretrazi={pretrazi}></NavBar>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>

            <Route path="/gyms" element={<Gyms  kriterijum={krterijumPretrage} 
              gyms={allGyms} dodaj={dodaj}></Gyms>}></Route>

            <Route path="/favorites" element={<Favorites kriterijum={krterijumPretrage}  
              gyms={favoriteGyms} izbaci={izbaci}></Favorites>}></Route>

          </Routes>
     </BrowserRouter>

    <Footer></Footer>
    </div>
  );
}

export default App;
