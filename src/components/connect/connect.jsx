import React from "react";
import './connect.css'
const Connect=()=>{
    return (
    <>
         <div class="contact" id="contact">
         <div style={{ marginLeft: '50px',marginTop:'200px' }}>
          <h2>Let's connect</h2>
          <p>
            I am currently looking for new opportunities, my inbox is always open. Whether you have
            a question or just want to say hi, I'll try my best to get back to you!
          </p>
         </div>
         <div style={{ marginRight: '50px',marginTop:'200px' }}>
          <h1>Email</h1>
          <a
        href="mailto:kupadhyay2394@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: 'white', textDecoration: 'none' }}
      >
          <p>kupadhyay2394@gmail.com</p>
          </a>
          <h2>LinkedIn</h2>
          <a
  href="https://www.linkedin.com/in/krishna-upadhyay-bb0793225"
  target="_blank"
  rel="noopener noreferrer"
  style={{ color: 'white', textDecoration: 'none' }}
>
  <p>Krishna Upadhyay</p>
</a>
          <h2>GitHub</h2>
          <a
        href="https://github.com/kupadhyay2394"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: 'white', textDecoration: 'none' }}
      >
          <p>kupadhyay2394</p></a>
         </div>
       </div>
       <div style={{ textAlign:'center'}}>
      <p style={{textAlign:'center'}}>Made With Love By Krishna Upadhyay</p>
   </div>
    </>
      
    )
}
export default Connect;