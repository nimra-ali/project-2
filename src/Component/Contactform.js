import React from 'react'
import logo2 from '../Images/image-2.svg'
function ContactForm() {
  return (
    <div className='container'>
        <div className='form'>
            <button className='form_btn'>Via Support Chat</button>
            <button className='form_btn-1'>Via Call</button>
            <div className='form_detail'>
            <button className='form_email'>Via Email Form</button>
            <label htmlFor='Name'>Name</label>
            <input type='text' name='name'/>
            {/* <label htmlFor='Name'>mail</label> */}
            </div>
            <div className='form_details'>
            <label htmlFor='Name'>Email</label>
            <input type='text' name='email'/>
            
            </div>
            <div className='form_text'>
            <label htmlFor='Name'>TextArea</label>
            <textarea rows={4}></textarea>
            
            </div>
            <button className='formemail'>Via Email Form</button>
           
        </div>
       <div className='form-Img'>
        <img className='fom-img' src={logo2} alt='pic'/>
        </div>
    </div> 
  )
}

export default ContactForm