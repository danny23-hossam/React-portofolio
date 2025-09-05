import React, { useState } from 'react'
import './Contactme.css'

const Contactme = () => {
  const[form,setform]=useState({
    name:"",
    email:"",
    message:""
  });

  const check=(e)=>{
    e.preventDefault();

    if(form.name&&form.email&&form.message){
 setform({
      name:"",
      email:"",
      message:""
    });
    }

  else{
    return;
  }
   

  }

  function changename(e){
setform({...form,name:e.target.value});
  }
   function changeemail(e){
setform({...form,email:e.target.value});
  }

   function changemessage(e){
setform({...form,message:e.target.value});
  }


  return (
   <>
   <form class="row  form d-block m-auto" onSubmit={check}>
  <h2 className='mb-5 pt-5 h22' >Contact Me</h2>
  
  <div class="col-md-12 "> 
    <label htmlFor="name" className="form-label fw-semibold label" >Name</label>
    <input type="text" className="form-control fw-semibolden mb-3" id="name" onChange={changename} value={form.name}/>
    {!form.name&&<p className='text-danger'>Please enter a username</p>}
  </div>
  
  <div class="col-md-12">
    <label for="inputCity" className="form-label fw-semibolden label">Email</label>
    <input type="email" className="form-control mb-3" id="inputCity"  onChange={changeemail} value={form.email}/>
     {!form.email&&<p className='text-danger'>Please enter ur email</p>}
  </div>
  <div class="col-md-12">
    <label for="inputmessage" className="form-label fw-semibolden label ">Message</label>
   <textarea name="" id="inputmessage" className='form-control mb-4' cols={40} rows={6}  onChange={changemessage} value={form.message}></textarea>
    {!form.message&&<p className='text-danger'>Please enter a Message</p>}
  </div>
  
  
 
  <div class="col-md-6 mb-5">
    <button type="submit" className="button2 mb-5">Send Message</button>
  </div>
</form>
   </>
  )
}

export default Contactme