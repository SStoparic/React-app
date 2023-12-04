import { Link } from 'react-router-dom';
//ikonica za pretragu
import { BsSearch } from 'react-icons/bs';
function NavBar({pretrazi}) {
  return (
    <div>
        <nav className="nav">
            <div className="nav__title"><Link to='/'><h1>Belgrade Gyms</h1></Link></div>
                <ul className="nav__list">

                    <li className="nav__item">   <Link to='/'>Home </Link></li>
                    <li className="nav__item"> <Link to='/gyms'>Gyms</Link></li>
                    <li className="nav__item"> <Link to='/favorites'>Favorite Gyms</Link></li>
                    <li className="nav__item"> 

                       <input type="text" id="kriterijum" placeholder=" " 
                        name="search" onChange={()=>pretrazi(document.getElementById('kriterijum').value)}/>
                        <button type="submit" className='dugmePretraga'  ><BsSearch></BsSearch></button>



                    </li>
                </ul>
        </nav>
    </div>
  );
}

export default NavBar;