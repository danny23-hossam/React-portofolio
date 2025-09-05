import React from 'react'
import './Courses.css'
import pic1 from '../assets/Bootstrapcertificate_page-0001.jpg'
import pic2 from '../assets/jscoursecertificate_page-0001.jpg'
import pic3 from '../assets/Coursera 85F3DCREEKCH_page-0001.jpg'
const Courses = () => {
  return (
   
    <div className='row'>
<h2 className='container-fluid offset-5 mt-5'>Courses</h2>

<div className='cards d-flex mt-5'>



  <div className='card course1 course col-4 offset-2'>
<img src={pic1} className="card-img-top pic1" alt="..."/>
  </div>



  <div className='card course2 course col-4  offset-1 '>
<img src={pic2} className="card-img-top pic2" alt="..."/>
  </div>

</div>


<div className='card course3 course offset-4 col-4 mt-5 mb-5'>
<img src={pic3} className="card-img-top pic3 " alt="..."/>
</div>




    </div>





    





    


  )
}

export default Courses