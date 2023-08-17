// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import NavBar from '../components/navbar';
import './rootStyle.scss';
import img from '../(0)BachelorBattleFinalPrintable.png'

export default function Root() {
    return (
      <>
      <NavBar/>
      <div className='header-top'>
        <h1>Welcome Traveler, have a seat and listen to the tales of heroes past.</h1>
      </div>
      <div>
        <h3>Choose an adventure to hear.</h3><br/>
      </div>
      <div className='img-container'>
        <p>Till Undeath Do Us Part</p>
        <a href='/recap'>
        <img className='header-img1' src={`${img}`}/>
        </a>
      </div>
      </>
    );
  }