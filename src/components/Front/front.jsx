import React from "react";
import photo from "../../assets/photo.jpg";
import "./front.css";

const Home= () =>{
    return(
        <>
        <div className="home" id="home">
          <h1 >Hi! I am Krishna Upadhyay</h1>
          <h2>|| Full-stack Developer || Software Engineer ||</h2>
          <img style={{ height: '200px',width:'200px', borderRadius:'200px'  }} src={photo} alt="LOGO" /> 
       
        
          <h1>
            A developer with an innovative<br/>mindset and enthusiasm for<br/>coding and developing new
            things.
          </h1>
          </div>
        
        </>
    );
};
export default Home;
