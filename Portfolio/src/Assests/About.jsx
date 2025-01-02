import React from 'react'

function About() {
  return (
    <div>
        
    <section className=' md:flex justify-between items-center py-24 px-20 bg-[#0c1a25]'>
        <div className=" items-center justify-center bg-gradient-to-r from-[#7600ff] to-[#00f0ff] rounded-full p-4 shadow-lg shadow-cyan-300/40">
            <img src="" alt="Havindu Hemal" className=' w-96 h-auto rounded-full shadow-lg border-[10px] border-[#0c1a25] bg-gradient-to-r from-[#00f0ff] to-[#7600ff] p-1'/>
        </div>
        
        <div className="about-text max-w-lg">
            <h2 className='text-4xl font-bold leading-tight text-white'>About <span className='text-[#00f0ff]'>Me</span></h2>
            <h3 className='text-2xl mt-2 text-white'>Full Stack Developer!</h3>
            <p className='my-5 text-lg leading-relaxed text-gray-400'>
                I am a skilled web developer with over 2 years of experience in the industry. 
                My passion lies in creating captivating website designs and implementing them 
                through frontend development. I take pride in staying up-to-date with current 
                design trends and leveraging my creativity to produce visually appealing and 
                user-friendly websites. Throughout my career, I have developed a deep understanding 
                of user experience (UX) and user interface (UI) principles...
            </p>
            <a href="#" class="btn">More About Me</a>
        </div>
    </section>
      
    </div>
  )
}

export default About
