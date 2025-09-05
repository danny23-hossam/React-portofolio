
import './App.css'
import Home from './Components/Home'
import Skills from './Components/Skills'
import { Route,Routes,Link } from 'react-router-dom'
import Projects from './Components/Projects'
import Courses from './Components/Courses'
import Contactme from './Components/Contactme'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';



function App() {


  return (
    <>
   
    <nav className='container-fluid d-flex align-items-center '>
      <div className='col-9 gap-4 icons'>
     <a href=''> <i className="bi bi-envelope"></i></a>
        <a href='https://github.com/danny23-hossam'> <i className="bi bi-github"></i></a>
      <a href=''>   <i className="bi bi-linkedin"></i></a>

<a href=""><i class="bi bi-instagram"></i></a>
<a href=""><i class="bi bi-facebook"></i></a>

      </div>
      <div className='col-3 mb-2 mt-2'>
      <Link to="/">Home</Link>
      <Link to='/skills'>Skills</Link>
      <Link to='/projects'>Projects</Link>
      <Link to='/courses'>Courses</Link>
      <Link to="/contactme">ContactMe</Link>
      </div>
      
    </nav>
<div className='content'>
      <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="/skills" element={<Skills/>}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/courses" element={<Courses />}/>
          <Route path="/contactme" element={<Contactme />}/>
      </Routes>
 </div>


    </>
  )
}

export default App
