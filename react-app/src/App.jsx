import React from 'react';
import './App.css';
import { GrMail } from "react-icons/gr";
import { BsTelephoneFill, BsFacebook,BsInstagram, BsLinkedin,BsYoutube } from "react-icons/bs";

import Instagram from "./assets/instagram.png"
import Facebook from "./assets/facebook.png"
import Linkedin from "./assets/linkedin.png"
import Youtube from "./assets/youtube.png"
import Location from "./assets/location.png"
import QR from "./assets/QR-code.png"
import Email from "./assets/email.png"
import Phone from "./assets/phone.png"
import Whatsapp from "./assets/whatsapp.png"
import Google from "./assets/google.png"
import Gif from "./assets/gear.gif"

function App() {

const [count, setCount] = React.useState(0)
React.useEffect(() => {
  const intervalId = setInterval(() => {
    // Increment count up to 16, then reset it to 0
    setCount((prevCount) => (prevCount >= 16 ? 0 : prevCount + 1));
  }, 500);

  // Cleanup the interval on unmount or if count changes

  return () => clearInterval(intervalId);
}, []);


  const data = [
    {
      id:"1",
      image:"https://www.kavitsu.com/img/planetary-gearboxes.jpg",
      name:"Planetary Gearboxes"
    },
    {
      id:"2",
      image:"https://www.kavitsu.com/img/bevel-planetary-speed-reducer.jpg",
      name:"Bevel Planetary Speed Reducers"
    },
    {
      id:"3",
      image:"https://www.kavitsu.com/img/helical-gear-boxes.jpg",
      name:"Helical Gear Boxes"
    },
    {
      id:"4",
      image:"https://www.kavitsu.com/img/mini-planetary.jpg",
      name:"Mini Planetary"
    },
    {
      id:"5",
      image:"https://www.kavitsu.com/img/shaft-mounted-speed-reducer.jpg",
      name:"Shaft Mounted speed Reducer"
    },
    {
      id:"6",
      image:"https://www.kavitsu.com/img/planetary-creep-drives.jpg",
      name:"Planetary Creep Drive"
    },
    {
      id:"7",
      image:"https://www.kavitsu.com/img/planetary-crystilizer.jpg",
      name:"Planetary Crystallizers"
    },
    {
      id:"8",
      image:"https://www.kavitsu.com/img/planetary-geared-motor.jpg",
      name:"Planetary Geared Motor"
    },
    {
      id:"9",
      image:"https://www.kavitsu.com/img/worm-gear-boxes.jpg",
      name:"worm GEAR Boxes"
    },
    {
      id:"10",
      image:"https://www.kavitsu.com/img/img1.jpg",
      name:"Planetary Speed Reducer"
    },
    {
      id:"11",
      image:"https://www.kavitsu.com/img/planetary-sprocket-drives.jpg",
      name:"Planetary Sprocket Drives"
    },
    {
      id:"12",
      image:"https://www.kavitsu.com/img/planetary-winches.jpg",
      name:"Planetary Winches"
    },
    {
      id:"13",
      image:"https://www.kavitsu.com/img/Planetary-Belt-Conveyor-drive.jpg",
      name:"Planetary Belt Conveyor drive"
    },
    {
      id:"14",
      image:"https://www.kavitsu.com/img/Special-Multi-Speed-Gear-Boxes-image-for-website.jpg",
      name:"Special Multi Speed Gear Boxes"
    },
    {
      id:"15",
      image:"https://www.kavitsu.com/img/Torque-Limiters.jpg",
      name:"Torque Limiters"
    },
    {
      id:"16",
      image:"https://www.kavitsu.com/img/Planetary-Parallel-axis-&-Uni-Axis.jpg",
      name:"Planetary Parallel axis & Uni Axis"
    },
   
  ]


  return (
    <div className="App">


{/*  <----------------- NAVBAR -------------------------------> */}

      <div className='navbar'>
          <a href='mailto:marketing@kavitsu.com'><img src={Email} alt="" /><p>marketing@kavitsu.com</p></a>
          <a href='tel:+919860799510'><img src={Phone} alt="" /><p>+91 9860799510</p></a>
      </div>

      
      {/*  <----------------- SOCIAL -------------------------------> */}
      
      
      <div className='social'>

     
        <div className='icons1'>
          <a href='https://www.linkedin.com/company/kavitsu-transmissions-pvt-ltd/'><img src={Linkedin} alt='' /></a>
          <a href='https://www.google.com/search?q=kavitsu&rlz=1C5CHFA_enIN1037IN1037&oq=kavitsu+&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgcIARAAGIAEMgcIAhAAGIAEMgcIAxAAGIAEMgYIBBBFGDwyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQgyNTUyajBqN6gCALACAA&sourceid=chrome&ie=UTF-8'><img src={Google} alt='' /></a>
          <a href='https://www.instagram.com/kavitsu803/'><img src={Instagram} alt='' /></a>
        </div>

        <div className='logo'>
        <img src='https://www.kavitsu.com/img/kavitsu-logo1.png' alt='' />
      </div>

        <div className='icons2'>
          <a href='https://www.youtube.com/@kavitsutransmissions7371'><img src={Youtube} alt='' /></a>
          <a href='https://www.facebook.com/KavitsuTransmissions'><img src={Facebook} alt='' /></a>
          <a href='https://api.whatsapp.com/send?phone=+91%209096469696&text=Hi!%20I%27m%20interested%20in%20your%20service'><img src={Whatsapp} alt='' /></a>
        </div>
      </div>


      <div className='gif'>
        <img src={Gif} alt='' />
      </div>


{/*  <----------------- PRODUCTS -------------------------------> */}

      <div className='products'>
        <h1>Products</h1>
        <div className='prod '>
          {
            data.map((item) => (
              <div className='item' key={item.id}>
                  <img src={item.image} alt='' />
                  <p>{item.name}</p>
              </div>
            ))
          }
          </div>
          </div>

       

{/*  <----------------- FOOTER -------------------------------> */}

          <div className='footer'>
            <a href='https://maps.app.goo.gl/hGGvAEssyZUM7zgc6'>
          <img src={Location} alt=''/> 
              Kavitsu Transmissions Pvt. Ltd.
              W-85, additional MIDC Satara 415004 Maharashtra, India
            </a>
            <div className='QR'>
          <img src={QR} alt='' />
          </div>
          </div>

          
    </div>
  );
}

export default App;
