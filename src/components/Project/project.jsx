import React from "react";
import urlshortner from '../../assets/urlshortner.png';
import weather from '../../assets/weather.jpeg';
import todo from '../../assets/todo.png';
import './project.css'
const Project=()=>{
    return (
        <>
        <div className="project" id="project">
        
        <h1 style={{marginTop:'50px'}}>Projects</h1>
        <div className="icon">
         <div className="icon-item">
        <a 
        href="https://github.com/kupadhyay2394/UrlShortner"
        target="_blank"
        rel="noopener noreferrer"
        style={{  textDecoration: 'none' }}
      >
          <div >
            <img  style={{ height:"250px", width: '250px',borderTopLeftRadius:'25px',borderTopRightRadius:'25px' }} src={urlshortner} alt="Url Shortner" />
            <h2>Url Shortner</h2>
            <p>Url shortener API using server-side rendering</p>
          </div>
          </a>
          </div>
          <div className="icon-item">
          <a
        href="https://github.com/kupadhyay2394/wether-api-using-redi"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none' }}
      >
          <div >
            <img style={{ width: '250px',borderTopLeftRadius:'25px',borderTopRightRadius:'25px' }} src={weather} alt="Weather API" />
            <h2>Weather API</h2>
            <p>Weather API using Redis cache</p>
          </div>
          </a>
          </div>
          
          <div className="icon-item">
          <a
        href="https://github.com/kupadhyay2394/TodoList"
        target="_blank"
        rel="noopener noreferrer"
        style={{textDecoration: 'none' }}
      >

          <div >
            <img style={{ width: '250px',borderTopLeftRadius:'25px',borderTopRightRadius:'25px' }} src={todo} alt="Todo App" />
            <h2>Todo App</h2>
            <p>A todo app based on CRUD operations</p>
          </div>
          </a>
          </div>
          </div>
        </div>
        
      </>
    )
}
export default Project;