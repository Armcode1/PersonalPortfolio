import React from 'react'

function Services() {
  return (
    <div>
        
    <section id='Services' className='py-24 px-5 bg-[#0c1a25] text-center'>
        <h2 className='text-4xl md:text-5xl text-white mb-12'>My <span className='text-[#00f0ff]'>Services</span></h2>
        <div className='flex flex-wrap justify-around gap-8'>
            <div className='bg-[#112233] p-8 rounded-lg shadow-lg shadow-cyan-300/10 w-[300px] transition-transform duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-[#4EEC88]'>
                <div className='service-icon text-4xl mb-5 text-[#00f0ff]'>⚙️</div>
                <h3 className='text-2xl text-white mb-4'>UI/UX Design</h3>
                <p className='text-gray-400 mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur possimus voluptate.</p>
                <a href="#"  className="inline-block px-6 py-3 text-white bg-[#00f0ff] rounded-full transition duration-300 hover:bg-[#00cce7]">learn more</a>
            </div>
            <div className='bg-[#112233] p-8 rounded-lg shadow-lg shadow-cyan-300/10 w-[300px] transition-transform duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-[#4EEC88]'>
                <div className='text-4xl mb-5 text-[#00f0ff]'>💻</div>
                <h3 className='text-2xl text-white mb-4'>Web Design</h3>
                <p className='text-gray-400 mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur possimus voluptate.</p>
                <a href="#"  className="inline-block px-6 py-3 text-white bg-[#00f0ff] rounded-full transition duration-300 hover:bg-[#00cce7]">learn more</a>

            </div>
            <div className='bg-[#112233] p-8 rounded-lg shadow-lg shadow-cyan-300/10 w-[300px] transition-transform duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-[#4EEC88]'>
                <div className='text-4xl mb-5 text-[#00f0ff]'>📱</div>
                <h3 className='text-2xl text-white mb-4'>Software Development</h3>
                <p className='text-gray-400 mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur possimus voluptate.</p>
                <a href="#"  className="inline-block px-6 py-3 text-white bg-[#00f0ff] rounded-full transition duration-300 hover:bg-[#00cce7]">learn more</a>

            </div>
        </div>
    </section>
      
    </div>
  )
}

export default Services
