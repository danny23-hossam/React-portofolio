
import pic3 from '../assets/padded_1.jpeg'
import pic2 from '../assets/padded_2 (3).jpeg'
import pic1 from '../assets/padded_3 (1).jpeg'
import './Project.css'

const Projects = () => {
  
  return (
    <div className='row container-fluid'>
<h2 className=' offset-5 mt-5  d-block mb-5'>Latest Projects</h2>

<div className='d-flex gap-2'>
  <div class="card">
    <div className='container'>
   <img src={pic1} className="card-img-top pic"/>
   <a href="https://github.com/danny23-hossam/TravelBloomwebsite" className='code btn btn-secondary'>code</a>
    </div>
        
          <div className="card-body">
                 <h3 className="card=title title">Travel Bloom</h3>
<p className="card-text text">
  A travel website that helps users explore destinations with smart search and personalized recommendations for temples and beaches.
</p>



<button className='btn btn-secondary mx-2'>Html</button>
<button className='btn btn-secondary mx-2'>Css</button>
<button className='btn btn-secondary mx-2'>JavaScript</button>
<button className='btn btn-secondary mx-2'>Bootstrap</button>

          </div>
</div> 

   


     <div class="card">
          <div className='container'>
   <img src={pic2} className="card-img-top pic"/>
   <a href="https://github.com/danny23-hossam/ReactCalculator" className='code btn btn-secondary'>code</a>
    </div>
          <div className="card-body">
                 <h3 className="card=title title"> Calculator</h3>
                  <p className="card-text text"><p className="card-text">
  A calculator app that performs arithmetic operations with options to reset the input or the result.
</p>
</p> 
<button className='btn btn-secondary mx-2'>Html</button>
<button className='btn btn-secondary mx-2'>Css</button>
<button className='btn btn-secondary mx-2'>JavaScript</button>
<button className='btn btn-secondary mx-2'>Bootstrap</button>
<button className='btn btn-secondary mx-2'>React</button>
          </div>
</div> 



<div class="card">
          <div className='container'>
   <img src={pic3} className="card-img-top pic"/>
   <a href="https://github.com/danny23-hossam/reactguessinggame" className='code btn btn-secondary'>code</a>
    </div>
          <div className="card-body">
                 <h3 className="card=title title"> Guessing A Number Game</h3>
<p className="card-text text">
  A number guessing game where players try to guess the secret number with hints and attempts tracking.
</p>


<button className='btn btn-secondary mx-2'>Html</button>
<button className='btn btn-secondary mx-2'>Css</button>
<button className='btn btn-secondary mx-2'>JavaScript</button>
<button className='btn btn-secondary mx-2'>Bootstrap</button>

          </div>
</div> 


</div>






  




    </div>
  )
}

export default Projects