import { useState } from 'react';
import logo from './assets/photo.jpg';
import reactLogo from './assets/react.png';
import nodeLogo from './assets/node.png';
import expressLogo from './assets/express.png';
import cssLogo from './assets/Css.jpeg';
import cppLogo from './assets/cpp.png';
import gitLogo from './assets/git.png';
import postgresLogo from './assets/postgres.png';
import mongoLogo from './assets/Mongo.png';
import typescriptLogo from './assets/typescript.png';
import htmlLogo from './assets/html.png';
import urlshortner from './assets/urlshortner.png';
import weather from './assets/weather.jpeg';
import todo from './assets/todo.png';
import './App.css';
import Dashboard from './components/dashboard/Dashboard.jsx';
import Home from './components/Front/front';
import About from './components/about/about';
import Project from './components/Project/project';
import Connect from './components/connect/connect';



function App() {

 

  return (
    <>
    
    <Dashboard />
      
    <Home />
    <About />
    <Project />
    <Connect />

      {/*

      <div id="projects" style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around' }}>
        <h1 style={{marginTop:'50px'}}>Projects</h1>
        <div style={{ display: 'grid', gridTemplateColumns: '200px 200px 200px', gap: '100px' }}>
        <a
        href="https://github.com/kupadhyay2394/UrlShortner"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: 'white', textDecoration: 'none' }}
      >
          <div style={{ backgroundColor: 'grey', width: '250px' , borderRadius:'25px',alignContent:'center'}}>
            <img style={{ width: '250px', height: '250px',borderTopLeftRadius:'25px',borderTopRightRadius:'25px' }} src={urlshortner} alt="Url Shortner" />
            <h2>Url Shortner</h2>
            <p>Url shortener API using server-side rendering</p>
          </div>
          </a>
          <a
        href="https://github.com/kupadhyay2394/wether-api-using-redi"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: 'white', textDecoration: 'none' }}
      >
          <div style={{ backgroundColor: 'grey', width: '250px',borderRadius:'25px',alignContent:'center' }}>
            <img style={{ width: '250px',borderTopLeftRadius:'25px',borderTopRightRadius:'25px' }} src={weather} alt="Weather API" />
            <h2>Weather API</h2>
            <p>Weather API using Redis cache</p>
          </div>
          </a>
          <a
        href="https://github.com/kupadhyay2394/TodoList"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: 'white', textDecoration: 'none' }}
      >
          <div style={{ backgroundColor: 'grey', width: '250px',borderRadius:'25px',alignContent:'center' }}>
            <img style={{ width: '250px' ,borderTopLeftRadius:'25px',borderTopRightRadius:'25px'}} src={todo} alt="Todo App" />
            <h2>Todo App</h2>
            <p>A todo app based on CRUD operations</p>
          </div>
          </a>
        </div>
      </div>

      <div id="contact" style={{ height: '100vh', display: 'flex', justifyContent: 'space-between' }}>
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
      </div> */}
    </>
  );
}

export default App;
