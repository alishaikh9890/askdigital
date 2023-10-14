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
import Google from "./assets/google-try.png"
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
      image:"https://finemanufacturing.com/assets/img/gallery/universaltestingmachine.jpg",
      name:"Universal Testing Machines"
    },
    {
      id:"2",
      image:"https://finemanufacturing.com/assets/img/gallery/acservo.jpg",
      name:"Electro-Mechanical Servo Controlled Universal Testing Machine"
    },
    {
      id:"3",
      image:"https://finemanufacturing.com/assets/img/gallery/tensiletestingmachine.jpg",
      name:"Electro-Mechanical Universal Testing Machine"
    },
    {
      id:"4",
      image:"https://finemanufacturing.com/assets/img/gallery/impacttestingmachine.jpg",
      name:"Impact Testing Machine"
    },
    {
      id:"5",
      image:"https://finemanufacturing.com/assets/img/blog/motobro.jpg",
      name:"Notch Broaching machine"
    },
    {
      id:"6",
      image:"https://finemanufacturing.com/assets/img/blog/computarisedbrinell.jpg",
      name:"Brinell Hardness Testing Machine"
    },
    {
      id:"7",
      image:"https://finemanufacturing.com/assets/img/blog/analoguehardnesstester1.jpg",
      name:"Rockwell Hardness Testing Machine"
    },
    {
      id:"8",
      image:"https://finemanufacturing.com/assets/img/blog/deepthro.jpg",
      name:"Deep Throat Brinell Hardness Testing Machine"
    },
    {
      id:"9",
      image:"https://finemanufacturing.com/assets/img/gallery/vickers.jpg",
      name:"Vickers Hardness Testing Machine"
    },
    {
      id:"10",
      image:"https://finemanufacturing.com/assets/img/blog/portable11.jpg",
      name:"Portable Hardness Testing Machines"
    },
    {
      id:"11",
      image:"https://finemanufacturing.com/assets/img/blog/barcole.jpg",
      name:"Barcol Hardness tester"
    },
    {
      id:"12",
      image:"https://finemanufacturing.com/assets/img/blog/comptorshion.jpg",
      name:"Digital Torsion Testing Machine"
    },
    {
      id:"13",
      image:"https://finemanufacturing.com/assets/img/gallery/digitalfatiguetestngmachine.jpg",
      name:"Fatigue Testing Machine"
    },
    {
      id:"14",
      image:"https://finemanufacturing.com/assets/img/gallery/compressiontesting.jpg",
      name:"Digital Compression Testing Machine"
    },
    {
      id:"15",
      image:"https://finemanufacturing.com/assets/img/gallery/set20.jpg",
      name:"Erichsen Cupping Testing Machine"
    },
    {
      id:"16",
      image:"https://finemanufacturing.com/assets/img/gallery/springtestngmachine.jpg",
      name:"Spring Testing Machine"
    },
    {
      id:"17",
      image:"https://finemanufacturing.com/assets/img/gallery/feq251.jpg",
      name:"End Quench Tester FEQ-25"
    },
   
    {
      id:"18",
      image:"https://finemanufacturing.com/assets/img/blog/forcecal.jpg",
      name:"Force calibration systems"
    },
   
    {
      id:"19",
      image:"https://finemanufacturing.com/assets/img/blog/custmain.jpg",
      name:"Customized Testing Machines"
    },
   
  ]


  return (
    <div className="App">


{/*  <----------------- NAVBAR -------------------------------> */}

      <div className='navbar'>
          <a href='tel:8087572455'><img src={Phone} alt="" /><p>+91 8087572455</p></a>
          <a href='mailto:response@finemanufacturing.com'><img src={Email} alt="" /><p>response@finemanufacturing.com</p></a>
      </div>

      
      {/*  <----------------- SOCIAL -------------------------------> */}
      
      
      <div className='social'>

     
        <div className='icons1'>
          <a href='https://www.linkedin.com/company/kavitsu-transmissions-pvt-ltd/'><img src={Linkedin} alt='' /></a>
          <a href='https://www.instagram.com/kavitsu803/'><img src={Instagram} alt='' /></a>
          <a href='https://www.google.com/search?q=kavitsu&rlz=1C5CHFA_enIN1037IN1037&oq=kavitsu+&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgcIARAAGIAEMgcIAhAAGIAEMgcIAxAAGIAEMgYIBBBFGDwyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQgyNTUyajBqN6gCALACAA&sourceid=chrome&ie=UTF-8'><img src={Google} alt='' /></a>
        </div>

        <div className='logo'>
        <img src='https://finemanufacturing.com/assets/img/logo/logo.png' alt='' />
      </div>

        <div className='icons2'>
        <a href='https://www.facebook.com/KavitsuTransmissions'><img src={Facebook} alt='' /></a>
          <a href='https://www.youtube.com/@kavitsutransmissions7371'><img src={Youtube} alt='' /></a>
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
