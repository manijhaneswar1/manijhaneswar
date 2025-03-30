import React from "react";
import { Button } from "../../utils/icons.jsx";
import { FaDatabase, FaGithub, FaGitAlt, FaJava, FaJs, FaCode, FaReact, FaMobileAlt } from "react-icons/fa";
import { MdIntegrationInstructions } from "react-icons/md";
import { AiOutlineBulb } from "react-icons/ai";
import { motion } from "framer-motion"
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
    { icon: <MdIntegrationInstructions /> },
    {icon: <FaDatabase /> },
    {icon: <FaGithub /> },
    { icon: <FaGitAlt /> },
    { icon: <FaJava /> },
    {  icon: <FaJs /> },
    {  icon: <AiOutlineBulb /> },
    { icon: <FaReact /> },
    {  icon: <FaMobileAlt /> },
    { icon: <FaCode /> },
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
                  src="/pencil_design.webp"
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
              className="relative min-h-screen flex items-center justify-center"
              style={{
                  backgroundImage: `url("/portfolio_img.jpg")`, // Remove "public" from path
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
              }}
          >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black opacity-60"></div>

              {/* Centered Text */}
              <div className="relative z-10 text-white text-start px-6 max-w-3xl">
                  <h3 className="text-xl font-serif uppercase tracking-wider">
                      ABOUT Jhaneswar
                  </h3>
                  <h1 className="font-serif text-4xl sm:text-5xl leading-normal mt-3 md:mt-4">
                      I'm a web engineer passionate about building scalable, user-friendly
                      applications with modern technologies.
                  </h1>
              </div>
          </div>


          {/* Get to Know Me Section */}
          <div className="min-h-screen flex flex-col justify-center lg:mt-20">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-mono text-center mb-10 md:mb-12">GET TO KNOW ME</h1>
              <div className="flex items-center justify-center ">
                  <div
                      className=" mx-auto max-w-2xl space-y-8 text-sm sm:text-xl lg:text-2xl leading-loose text-start px-12 lg:px-0">
                      <p>I'm a Introvert-person, meaning I focus on connection and actually prefer working in my
                          settings .</p>
                      <p>You'd never know the mental friction, the internal buzz, when a problem locks me in, because
                          the chase for the solution takes over.</p>
                      <p>When not in the office, you can usually find me in the gym, watching vlogs, or solving
                          LeetCode problems.</p>
                  </div>
              </div>

          </div>

          {/* Experience Section */}
            <div className="h-auto flex flex-col justify-center lg:mt-6">
                {/* Experience Title */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-center mb-8 md:mb-10 uppercase">
                    Experience
                </h1>

            {/* Experience List */}
            <div className="flex items-center justify-center">
                <div className="max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-3xl space-y-6 text-start px-2.5">
                    {ExperienceData.map((item, index) => (
                        <div key={index} className="mb-6 md:mb-8">
                            {/* Company Name */}
                            <h1 className="text-xl sm:text-2xl font-semibold text-slate-300 mb-4">{item.title}</h1>

                            {/* Job Roles */}
                            <p className="text-white text-base sm:text-lg mb-1">{item.role1}</p>
                            <p className="text-white text-base sm:text-lg">{item.role2}</p>
                        </div>
                    ))}
                </div>
            </div>
            </div>

            {/* Skills Section */}
            <div className="w-full mt-14 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-32">
                {/* Skills Title */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-center mb-10 md:mb-12 uppercase">
                    Skills
                </h1>

                {/* Skills Grid */}
                <motion.div
                    className="grid grid-cols-4 sm:grid-cols-5 gap-2 max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    {SkillsData.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center space-y-3 py-4 rounded-xl transition-all duration-300 hover:scale-105"
                            whileHover={{ scale: 1.05 }}
                        >
                            {/* Skill Icon */}
                            <div className="text-3xl">{skill.icon}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>


          {/* Contact Section */}
          <div className="w-full mt-14 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-32">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-mono text-center mb-10 md:mb-12">Call Me, Beep
                  Me</h1>
              {callData.map((item, index) => (
                  <div key={index} className="max-w-2xl mx-auto mb-4 md:mb-6 px-12 lg:px-0">
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
              <img src="/Digital_Signature-Photoroom.webp" alt="sign" className="rounded h-16 sm:h-24 md:h-32 lg:h-40"/>
          </div>

      </div>
  );
};

export default About;
