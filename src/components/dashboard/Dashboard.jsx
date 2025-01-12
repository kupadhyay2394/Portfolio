import React from 'react';
import "./dashboard.css";
const Dashboard=()=>{
    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
      };
    return(
        <nav className="nawrapper">
            <div className='content'>
            <h2 className="item"  onClick={() => scrollToSection('home')}>Home</h2>
            <h2 className="item" onClick={() => scrollToSection('about')}>About</h2>
            <h2  className="item" onClick={() => scrollToSection('project')}>Projects</h2>
            <h2  className="item" onClick={() => scrollToSection('contact')}>Contact</h2>
            <h2 className="item" style={{backgroundColor:'white',borderRadius:'8px'}}>
                    <a
                    href="https://drive.google.com/file/d/1DQLczHC1t9eneCtx2mc0oV2Kegos-CMc/view?usp=drive_h2nk"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'black', textDecoration: 'none', padding:'0.8px',borderRadius:'0px' }}
                    >
                    Resume
                    </a>
                </h2>
                </div>
        
            </nav>
           
           
      
   
    );
};
export default Dashboard;