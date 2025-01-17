import React from 'react'
import './Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import logo from '../../assets/logo.png'


function Footer() {
  return (
    <footer className='footer'>
      <section className='box1'>
        <img className='logofooter' src={logo} alt="" />

        <div >
          <InstagramIcon sx={{ color: "white" }} />
          <YouTubeIcon sx={{ color: "white" }} />
          <FacebookIcon sx={{ color: "white" }} />
          <XIcon sx={{ color: "white" }} />
        </div>

      </section>


      {/*  second section */}
      <section className='box2'>
        <p>Navigation</p>
        <p>Home</p>
        <p>About</p>
        <p>E-Books</p>
        <p>Contact</p>
        <p>Blog</p>
        <p>Terms of Service</p>
      </section>
      {/*  3 section */}
      <section className='box3'>
        <p>Categories</p>
        <p>Forklift Parts</p>
        <p>ForkLift Services</p>
        <p>Forklift Rentals</p>
        <p>Equipments</p>
      </section>
      {/*  3 section */}
      <section className='box4'>
        <p>Need Help? /Contact us</p>
        <p>1120 Oacklegn Drive</p>
        <p>Eastpoint,GA 30344</p>
        <p>770-692-1455(ph)</p>
        <p>770-692-1450(fax)</p>
      </section>



    </footer>
  )
}

export default Footer