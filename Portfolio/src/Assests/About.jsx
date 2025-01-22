import React from 'react'
import ResumeButton from './ResumeButton'

function About() {
  return (
    <div>
        
    <section id='about' className=' md:flex items-center justify-between py-24 px-10 bg-[#0c1a25]'>
        <div className=" items-center justify-center pb-9 ">
          <img src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif?cid=790b761158ubchlgzph0exatwjnz3syx45wbowc9yw2aj2dh&ep=v1_gifs_search&rid=giphy.gif&ct=g"
            alt="Coding Animation"
            className=' w-96 h-auto p-1' />
        </div>
        
        <div className="about-text max-w-lg">
          <h2 className='text-4xl font-bold leading-tight text-white'>About <span className='text-[#00f0ff]'>Me</span></h2>
          <h3 className='text-2xl mt-2 text-white'>Full Stack Developer!</h3>
          <p className='my-5 text-lg leading-relaxed text-gray-400'>
            Hi, I’m Arman Ali, a passionate Full-Stack Developer and tech enthusiast with a strong foundation in Computer Science Engineering. I hold a Bachelor of Technology (B.Tech) degree from Dr. APJ Abdul Kalam Technical University.

            I specialize in building end-to-end web applications, combining intuitive frontend design with efficient backend functionality. My expertise includes technologies like React, Node.js, Express, MongoDB, and JavaScript, enabling me to create scalable and user-friendly solutions.

            Driven by a desire for continuous learning, I’m constantly exploring new tools and techniques to enhance my skills. I also have a keen interest in Data Structures and Algorithms (DSA) and enjoy solving complex problems to improve my coding proficiency.

            🚀 My goal is to contribute to impactful projects that make a difference and push the boundaries of technology.

            When I’m not coding, you’ll find me mentoring others in their tech journey or exploring the latest trends in web development.


          </p>
          <ResumeButton/>
        </div>
    </section>
      
    </div>
  )
}

export default About
