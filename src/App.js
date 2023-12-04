import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Gyms from './components/Gyms';
import { useState } from 'react';

function App() {

  const[allGyms] = useState([

    {
      id:1,
      naziv:"NON STOP FITNESS",
      slika: "https://nonstopfitness.rs/wp-content/uploads/2020/04/NSF-Banovo-brdo-1-1.jpg",
      adresa: "Rudnicka 1",
      cena: 3000,
      povrsina: 400,

    },
    {
      id:2,
      naziv:"AHILEJ GYM",
      slika: "https://www.ahilej.com/storage/location/gallery/XFNLDVTOkhRALx9y377pgIF8PujuX1RhOJFuuj9f.jpeg",
      adresa:"Vojvode Stepe 207 ",
      cena: 4600,
      povrsina: 200,
      

    },
    {
      id:3,
      naziv:"IRON REPUBLIC GYM",
      slika: "https://nyamie.com/uploads/photos/medium/Entity-1X3RMjPCS7feyCZv.jpg",
      adresa:"Nehurova 51",
      cena: 4000,
      povrsina: 500,

    },
    {
      id:4,
      naziv:"MEGA GYM",
      slika: "https://megagym.rs/wp-content/uploads/2023/09/DMP_0010-min.webp",
      adresa:"Omladinskih Brigada 65a",
      cena: 4000,
      povrsina: 450,

    },
    {
      id:5,
      naziv:"ATHLETIC'S GYM",
      slika: "https://www.srfs.org.rs/wp-content/uploads/2021/01/zenska-teretana-beograd-vozdovac-1024x683.jpg",
      adresa:"Vojvode Stepe 363",
      cena: 3500,
      povrsina: 300,

    },
    {
      id:7,
      naziv:"SPORTS ACADEMY KOCOVIC",
      slika: "https://kocovic.rs/galleries/blokovi/5.jpg",
      adresa:"Crnotravska 4",
      cena: 5000,
      povrsina: 500,

    },
    {
      id:6,
      naziv:"MUSCLE BEACH",
      slika: "https://www.muscle-beach.rs/assets/gallery/gallery-5.png",
      adresa:"Bulevar Milutina Milankovića 9đ",
      cena: 3400,
      povrsina: 350,
    }
  ])

  return (
   <div>
    <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/gyms" element={<Gyms  gyms={allGyms}></Gyms>}></Route>
          </Routes>
     </BrowserRouter>

    <Footer></Footer>
    </div>
  );
}

export default App;
