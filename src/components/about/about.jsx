import React, { useState } from "react";
import reactLogo from "../../assets/react.png";
import nodeLogo from "../../assets/node.png";
import expressLogo from "../../assets/express.png";
import cssLogo from "../../assets/Css.jpeg";
import cppLogo from "../../assets/cpp.png";
import gitLogo from "../../assets/git.png";
import postgresLogo from "../../assets/postgres.png";
import mongoLogo from "../../assets/Mongo.png";
import typescriptLogo from "../../assets/typescript.png";
import htmlLogo from "../../assets/html.png";
import './about.css';

const About = () => {
  const [selectedTab, setSelectedTab] = useState("skill");

  const skills = [
    { name: "React", logo: reactLogo },
    { name: "Node", logo: nodeLogo },
    { name: "Express", logo: expressLogo },
    { name: "Postgres", logo: postgresLogo },
    { name: "Typescript", logo: typescriptLogo },
    { name: "MongoDB", logo: mongoLogo },
    { name: "CSS", logo: cssLogo },
    { name: "Git", logo: gitLogo },
    { name: "C++", logo: cppLogo },
    { name: "HTML", logo: htmlLogo },
  ];

  return (
    <>
    <div id="about" className="about">
        <div className="heading">
      <h1 >About Me</h1>
      <p>
        I am a Full Stack Web Developer with a passion for creating interactive
        and responsive web applications that deliver seamless user experiences.
        My expertise spans across a dynamic tech stack.
      </p>
      </div>

      <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
        <button
          onClick={() => setSelectedTab("skill")}
          style={{
            backgroundColor: selectedTab === "skill" ? "rgb(0, 123, 255)" :"white",
            color:selectedTab === "skill" ? "white" :"black" ,
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginRight: "10px",
          }}
        >
          Skills
        </button>
        <button

          onClick={() => setSelectedTab("education")}
          style={{
            backgroundColor: selectedTab === "education" ? "rgb(0, 123, 255)" :"white" ,
            color: selectedTab === "education" ? "white" :"black" ,
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Education
        </button>
      </div>

      {selectedTab === "skill" ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
            padding: "20px",
          }}
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "grey",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              <img
                src={skill.logo}
                alt={`${skill.name} Logo`}
                style={{ width: "50px", height: "50px", marginRight: "10px" }}
              />
              <span style={{ fontSize: "18px", fontWeight: "bold" }}>{skill.name}</span>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <div>
            <h2>Bachelor's of Technology</h2>
            <p>
              Galgotias College of Engineering and Technology (2021-2025)
              <br />
              Pursuing B.Tech in Artificial Intelligence and Data Science
              <br />
              Aggregate: 6.5
            </p>
          </div>
          <div>
            <h2>XIIth Board Examination</h2>
            <p>
              Sanskriti Public School
              <br />
              Passed 12th examination from CBSE with PCM stream
              <br />
              Aggregate: 78%
            </p>
          </div>
          <div>
            <h2>Xth Board Examination</h2>
            <p>
              Sanskriti Public School
              <br />
              Passed 10th examination from CBSE
              <br />
              Aggregate: 81%
            </p>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default About;
