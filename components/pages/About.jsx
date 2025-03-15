import React from "react";
import { Button } from "../../utils/icons.jsx";
import { FaDatabase, FaGithub, FaGitAlt, FaJava, FaJs, FaCode, FaReact, FaMobileAlt } from "react-icons/fa";
import { MdIntegrationInstructions } from "react-icons/md";
import { AiOutlineBulb } from "react-icons/ai";
const About = () => {
  const ExperienceData = [
    {
      title: "Micro Nano RDC, Parul University",
      role1: "Frontend Engineer for PUMNRDC",
      role2: "Web Engineer for Research and Development Cell",
    },
    {
      title: "Teachnook Company",
      role1: "Data Science Domain",
      role2: "Built Major Projects on Real-World Statistics",
    },
      {

      }
  ];

  const SkillsData = [
    { title: "API Integration", icon: <MdIntegrationInstructions /> },
    { title: "Back-end & Database Skills", icon: <FaDatabase /> },
    { title: "Github", icon: <FaGithub /> },
    { title: "Git Version Control", icon: <FaGitAlt /> },
    { title: "Java", icon: <FaJava /> },
    { title: "JavaScript Expertise", icon: <FaJs /> },
    { title: "Problem Solving", icon: <AiOutlineBulb /> },
    { title: "React.js Proficiency", icon: <FaReact /> },
    { title: "Responsive Design", icon: <FaMobileAlt /> },
    { title: "State Management", icon: <FaCode /> },
  ];


  const callData = [
    { title: "Email", content: "manijhaneswar@gmail.com" },
    { title: "Phone", content: "(91) 6302980584" },
  ];

  return (
      <div className="w-full min-h-screen bg-black text-white">

          {/* Pencil Sketch with Resume Inside */}
          <div className="relative flex items-center justify-center">
              {/* Pencil Sketch Image */}
              <img
                  src="../../public/pencil_design.jpg"
                  alt="pencil"
                  className="w-72 h-72"
              />

              {/* Resume Button Inside Image */}
              <a
                  href="https://drive.google.com/file/d/1vZHh86rgv2VGu9dmX305K5axHBumIklF/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-25"
              >
                  <Button/>
              </a>
          </div>

          {/* About Section */}
          <div
              className="flex flex-col items-center text-center sm:flex-row sm:justify-between px-6 md:px-16 lg:px-24 space-y-8 sm:space-y-0">
              <img src="/portfolio_img.png" alt="hero" className="w-44 h-44 md:w-72 md:h-72 sm:mr-6"/>

              <div className="px-6 md:px-16">
                  <h3 className="text-xs md:text-sm font-semibold uppercase tracking-wider">ABOUT :</h3>
                  <h1 className="text-lg md:text-2xl lg:text-3xl leading-tight font-semibold mt-3 md:mt-4">
                      I'm a web engineer passionate about building scalable, user-friendly applications with modern
                      technologies.
                  </h1>
              </div>
          </div>

          {/* Get to Know Me Section */}
          <div className="px-6 md:px-16 lg:px-40 min-h-screen flex flex-col justify-center lg:mt-20">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-mono text-center mb-10 md:mb-12">GET TO KNOW ME</h1>
              <div className="px-8 xl:px-44 space-y-8 text-sm sm:text-xl lg:text-2xl leading-loose">
                  <p>I'm a people-person, meaning I focus on connection and actually prefer working in group settings
                      (shocker).</p>
                  <p>You'd never know the mental friction, the internal buzz, when a problem locks me in,
                      because the chase for the solution takes over.</p>
                  <p>When not in the office, you can usually find me in the gym, watching movies, or solving leetcode Problems.</p>
              </div>
          </div>

          {/* Experience Section */}
          <div className="px-6 md:px-16 lg:px-40 min-h-screen pb-10">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-mono text-center mb-10 md:mb-14">Experience</h1>
              <div className="lg:px-20">
                  {ExperienceData.map((item, index) => (
                      <div key={index}
                           className="px-8 md:px-24 lg:px-28 text-start mb-6 md:mb-8 leading-loose text-sm sm:text-xl lg:text-2xl">
                          <h1 className="font-sans text-lg lg:text-xl mb-2 text-gray-300">{item.title}</h1>
                          <p>{item.role1}</p>
                          <p>{item.role2}</p>
                      </div>
                  ))}
              </div>
          </div>

          {/* Skills Section */}
          <div className="px-6 md:px-16 lg:px-40 min-h-screen mb-14 lg:mb-0">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-mono text-center mb-10 md:mb-12">Skills</h1>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
                  {SkillsData.map((skill, index) => (
                      <div key={index} className="flex flex-col items-center space-y-2 p-4">
                          <div className="text-4xl text-blue-400">{skill.icon}</div>
                          <p className="text-sm sm:text-lg lg:text-xl font-semibold">{skill.title}</p>
                      </div>
                  ))}
              </div>
          </div>

          {/* Contact Section */}
          <div className="px-6 md:px-16 lg:px-40">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-mono text-center mb-10 md:mb-12">Call Me, Beep
                  Me</h1>
              {callData.map((item, index) => (
                  <div key={index} className="px-8 md:px-24 lg:px-28 mb-4 md:mb-6">
                      <h1 className="font-sans text-lg lg:text-xl mb-2 text-gray-300">{item.title}</h1>
                      <p className="text-start mb-8 md:mb-10 leading-loose text-sm sm:text-xl lg:text-2xl">
                          {item.content === 'manijhaneswar@gmail.com'
                              ?
                              <a href="mailto:manijhaneswar@gmail.com" target="_blank">{item.content}</a>
                              :
                              item.content }
                      </p>
                  </div>
              ))}
          </div>

          {/* Signature Section (Smaller on Mobile) */}
          <div className="flex items-center justify-center py-8 md:py-12">
              <img src="/Digital_Signature-Photoroom.jpg" alt="sign" className="rounded h-16 sm:h-24 md:h-32 lg:h-40"/>
          </div>

      </div>
  );
};

export default About;
