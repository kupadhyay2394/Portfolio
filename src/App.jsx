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

function App() {
  const [selectedTab, setSelectedTab] = useState('skill');

  const skills = [
    { name: 'React', logo: reactLogo },
    { name: 'Node', logo: nodeLogo },
    { name: 'Express', logo: expressLogo },
    { name: 'Postgres', logo: postgresLogo },
    { name: 'Typescript', logo: typescriptLogo },
    { name: 'MongoDB', logo: mongoLogo },
    { name: 'CSS', logo: cssLogo },
    { name: 'Git', logo: gitLogo },
    { name: 'C++', logo: cppLogo },
    { name: 'HTML', logo: htmlLogo },
  ];

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="dashboard" style={{position:'sticky'}}>
        <h2 onClick={() => scrollToSection('home')}>Home</h2>
        <h2 onClick={() => scrollToSection('about')}>About</h2>
        <h2 onClick={() => scrollToSection('projects')}>Projects</h2>
        <h2 onClick={() => scrollToSection('contact')}>Contact</h2>
        <div>
        <h2>
      <a
        href="https://drive.google.com/file/d/1DQLczHC1t9eneCtx2mc0oV2Kegos-CMc/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: 'white', textDecoration: 'none' }}
      >
        Resume
      </a>
    </h2></div>
      </div>

      <div id="home" className="front">
        <div className="hello" style={{alignContent:'center'}}>
          <h1 style={{marginLeft:'20px'}}>Hi! I am Krishna Upadhyay</h1>
          <h2>|| Full-stack Developer || Software Engineer ||</h2>
        </div>
        <div className="Profilephoto">
          <img style={{ height: '200px', borderRadius:'200px'  }} src={logo} alt="LOGO" />
        </div>
        <div>
          <h1>
            A developer with an innovative mindset and enthusiasm for coding and developing new
            things.
          </h1>
        </div>
      </div>

      <div id="about" className="about">
        <h1>About Me</h1>
        <p>
          I am a Full Stack Web Developer with a passion for creating interactive and responsive web
          applications that deliver seamless user experiences. My expertise spans across a dynamic
          tech stack.
        </p>

        {/* Tab Section */}
        <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
          <button
            onClick={() => setSelectedTab('skill')}
            style={{
              backgroundColor: selectedTab === 'skill' ? 'grey' : 'black',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Skills
          </button>
          <button
            onClick={() => setSelectedTab('education')}
            style={{
              backgroundColor: selectedTab === 'education' ? 'grey' : 'black',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Education
          </button>
        </div>

        {/* Conditional Content Rendering */}
        {selectedTab === 'skill' ? (
          <div style={{ display: 'grid', gridTemplateColumns: '200px 200px 200px', gap: '50px' }}>
            {skills.map((skill, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: 'grey',
                  padding: '10px',
                  borderRadius: '8px',
                }}
              >
                <img
                  src={skill.logo}
                  alt={`${skill.name} Logo`}
                  style={{ width: '70px', height: '80px', marginRight: '10px' }}
                />
                <span style={{ fontSize: '24px', fontWeight: 'bold' }}>{skill.name}</span>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', marginTop: '20px'  }}>
            <div style={{marginLeft:"250px"}}>
              <h2>Bachelor's of Technology </h2>
              <p>Galgotias College of Engineering and Technology.(2021-2025)</p>
              <p>Pursuing B.tech in<br/>
              Artificial Intelligence and data science.<br/>
              Aggregate-6.5</p>
            </div>
            <div style={{marginRight:"250px"}}>
              <h2>XIIth Board Examination</h2>
              <p>Sanskriti Public School</p>
              <p>Passed 12th examination from CBSE <br/> school with PCM stream.<br/>
              Aggregate-78%</p>
            </div>
            <div style={{marginLeft:"250px"}}>
              <h2>Xth Board Examination</h2>
              <p>Sanskriti Public School</p>
              <p>Passed 10th examination from CBSE <br/> school with PCM stream.<br/>
              Aggregate-81%</p>
            </div>
          </div>
        )}
      </div>

      <div id="projects" style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around' }}>
        <h1>Projects</h1>
        <div style={{ display: 'grid', gridTemplateColumns: '200px 200px 200px', gap: '100px' }}>
        <a
        href="https://github.com/kupadhyay2394/UrlShortner"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: 'white', textDecoration: 'none' }}
      >
          <div style={{ backgroundColor: '#002', width: '250px' }}>
            <img style={{ width: '250px', height: '250px' }} src={urlshortner} alt="Url Shortner" />
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
          <div style={{ backgroundColor: '#002', width: '250px' }}>
            <img style={{ width: '250px' }} src={weather} alt="Weather API" />
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
          <div style={{ backgroundColor: '#002', width: '250px' }}>
            <img style={{ width: '250px' }} src={todo} alt="Todo App" />
            <h2>Todo App</h2>
            <p>A todo app based on CRUD operations</p>
          </div>
          </a>
        </div>
      </div>

      <div id="contact" style={{ height: '100vh', display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ marginLeft: '50px' }}>
          <h2>Let's connect</h2>
          <p>
            I am currently looking for new opportunities, my inbox is always open. Whether you have
            a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>
        <div style={{ marginRight: '50px' }}>
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
  );
}

export default App;
