import React from 'react';
import NavBar from './navbar';
import './characterStyles.scss';
import imgv from '../assests/vargus1.png';
import imgv2 from '../assests/vargus2.png';
// import imgv3 from '../assests/Vargus3.png';
// import imgv4 from '../assests/Vargus4.png';
import imga from '../assests/Altis1.png';
import imgz from '../assests/Zaltarish1.png';
import imgb from '../assests/Braves1.png';
import imgj from '../assests/Jackko1.png';
import imgbr from '../assests/Bendrick1.png';
import imgl from '../assests/Lazarus1.png';

const characterbio = () => {
  return (
    <>
    <NavBar/>
    <div className='header header-heroes'>
      <h1>Meet our Heroes</h1>
    </div>
    <div>
      <h3>Vargus</h3>
      <img src={`${imgv}`} alt='Warlock'/>
    </div>
    <div>
      <h3>Lazarus</h3>
      <img src={`${imgl}`} alt='Barbarian'/>
    </div><div>
      <h3>Altis</h3>
      <img src={`${imga}`} alt='Artificer'/>
    </div>
    <div>
      <h3>Jackko</h3>
      <img src={`${imgj}`} alt='Wizard'/>
    </div>
    <div>
      <h3>Zaltarish</h3>
      <img src={`${imgz}`} alt='Ranger'/>
    </div>
    <div>
      <h3>Braves</h3>
      <img src={`${imgb}`} alt='Shaman'/>
    </div>
    <div>
      <h3>Bendrick</h3>
      <img src={`${imgbr}`} alt='Paladin'/>
    </div>
    </>
  )
}

export default characterbio;