import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
  return (
   <div>
    <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
          </Routes>
     </BrowserRouter>

    <Footer></Footer>
    </div>
  );
}

export default App;
