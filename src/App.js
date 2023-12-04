import NavBar from './components/NavBar';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
   <div>
    <BrowserRouter>
        <NavBar></NavBar>
     </BrowserRouter>

    <Footer></Footer>
    </div>
  );
}

export default App;
