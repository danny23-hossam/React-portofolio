import React from 'react'
import '../Components/home.css'
import image from '../assets/WhatsApp Image 2025-09-04 at 12.27.10 AM.jpeg'

const Home = () => {
    
  return (
    <>
    <div className='container-fluid row d-flex align-items-center justify-content-center vh-100 '>
 <div className='offset-1 col-4'>
<p className='p1'>Hello, my name is </p>
<h2 className='h21'>Danny Hossam</h2>
<p className='p2'>I'm <span className='span1'>Web</span> Developer</p>
<div>
    <a href=""><i class="bi bi-whatsapp"></i></a>
<a href=""><i class="bi bi-facebook"></i></a>
<a href=""><i class="bi bi-instagram"></i></a>
<a href=""><i class="bi bi-linkedin"></i></a>
<a href=""><i class="bi bi-github"></i></a>
</div>

<button className='button' onClick={()=>window.open("https://drive.google.com/drive/u/0/my-drive", "_blank")}>Download CV</button>








      </div>
      <div className='col-3 div'>
              <img src={image} alt="" className='img'/>
      </div>
    </div>
     
    
    </>
  
  )
}

export default Home