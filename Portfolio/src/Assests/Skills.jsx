import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faJs,faReact,faHtml5,faCss3Alt,faFigma,faJava,faGitAlt,faGithub,faBootstrap,faNode,faPython} from '@fortawesome/free-brands-svg-icons';













function Skills() {
    // Use refs to access DOM elements
    const scrollContainerRef = useRef(null);
    const autoScrollRef = useRef(null);

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;

        // Automated scrolling
        const startAutoScroll = () => {
            autoScrollRef.current = setInterval(() => {
                // Increment scroll position
                scrollContainer.scrollLeft += 2;

                // Reset scroll position when it reaches the end
                if (
                    scrollContainer.scrollLeft >=
                    scrollContainer.scrollWidth - scrollContainer.clientWidth
                ) {
                    scrollContainer.scrollLeft = 0;
                }
            }, 20); // Adjust scrolling speed here
        };

        startAutoScroll();

        // Pause scrolling on hover
        const handleMouseOver = () => clearInterval(autoScrollRef.current);
        const handleMouseOut = startAutoScroll;

        scrollContainer.addEventListener('mouseover', handleMouseOver);
        scrollContainer.addEventListener('mouseout', handleMouseOut);

        // Cleanup event listeners and interval
        return () => {
            clearInterval(autoScrollRef.current);
            scrollContainer.removeEventListener('mouseover', handleMouseOver);
            scrollContainer.removeEventListener('mouseout', handleMouseOut);
        };
    }, []);

    return (
        <section id='Skills' className="bg-[#0c1a25] shadow-cyan-300 py-10 px-5 text-center">
            <h2 className="text-4xl text-white font-bold mb-6 relative inline-block">
                Skills
                <span className="absolute w-20 h-1 bg-[#6f42c1] rounded bottom-[-10px] left-1/2 transform -translate-x-1/2"></span>
            </h2>

            <div className="relative overflow-hidden flex items-center justify-start space-x-5 mt-6">
               

                {/* Scrollable Skills Container */}
                <div
                    id="skills-scroll"
                    ref={scrollContainerRef}
                    className="flex gap-5 overflow-x-hidden scrollbar-hide"
                >
                    {/* Skill Boxes */}
                    <div className="min-w-[150px] h-[150px] bg-[#112233] rounded-lg text-2xl flex flex-col items-center justify-center">
                    <FontAwesomeIcon icon={faHtml5} flip size='2xl' style={{color: "#f06529",}} / >
                        <span className="text-white text-sm">HTML</span>
                    </div>
                    <div className="min-w-[150px] h-[150px] bg-[#112233] rounded-lg text-2xl flex flex-col items-center justify-center">
                    <FontAwesomeIcon icon={faCss3Alt} beatFade size='2xl' style={{color: "#3b67ce",}} / >
                        <span className="text-white text-sm">CSS</span>
                    </div>
                    <div className="min-w-[150px] h-[150px] bg-[#112233] rounded-lg flex text-2xl flex-col items-center justify-center">
                    <FontAwesomeIcon icon={faFigma} beat size='2xl' style={{color: "#3b67ce",}} / >
                        <span className="text-white text-sm">Figma</span>
                    </div>
                    <div className="min-w-[150px] h-[150px] bg-[#112233] rounded-lg flex text-2xl flex-col items-center justify-center">
                        <div className="min-w-[150px] h-[150px] bg-[#112233] rounded-lg flex flex-col items-center justify-center">
                           <FontAwesomeIcon icon={faJs} beat size='2xl' style={{color: "#FFD43B",}} / >
                           <span className="text-white text-sm">JavaScript</span>
                        </div>
                        
                    </div>

                    <div className="min-w-[150px] h-[150px] bg-[#112233] rounded-lg flex text-2xl flex-col items-center justify-center">
                        <div className="min-w-[150px] h-[150px] bg-[#112233] rounded-lg flex flex-col items-center justify-center">
                           <FontAwesomeIcon icon={faReact} size='2xl' spin style={{color: "#63E6BE",}} / >
                           <span className="text-white text-sm">Reactjs</span>
                        </div>
                        
                    </div>

                    <div className="min-w-[150px] h-[150px] bg-[#112233] rounded-lg flex text-2xl flex-col items-center justify-center">
                        <div className="min-w-[150px] h-[150px] bg-[#112233] rounded-lg flex flex-col items-center justify-center">
                           <FontAwesomeIcon icon={faPython} size='2xl'  style={{color: "042b48",}} / >
                           <span className="text-white text-sm">Python</span>
                        </div>
                        
                    </div>


                    <div className="min-w-[150px] h-[150px] bg-[#112233] rounded-lg flex text-2xl flex-col items-center justify-center">
                        <div className="min-w-[150px] h-[150px] bg-[#112233] rounded-lg flex flex-col items-center justify-center">
                           <FontAwesomeIcon icon={faGitAlt} size='2xl' fade style={{color: "#f29945",}} / >
                           <span className="text-white text-sm">Git</span>
                        </div>
                        
                    </div>

                    <div className="min-w-[150px] h-[150px] bg-[#112233] rounded-lg flex text-2xl flex-col items-center justify-center">
                        <div className="min-w-[150px] h-[150px] bg-[#112233] rounded-lg flex flex-col items-center justify-center">
                           <FontAwesomeIcon icon={faGithub} size='2xl' beatFade / >
                           <span className="text-white text-sm">Github</span>
                        </div>

                        
                    </div>



                    <div className="min-w-[150px] h-[150px] bg-[#112233] rounded-lg flex text-2xl flex-col items-center justify-center">
                        <div className="min-w-[150px] h-[150px] bg-[#112233] rounded-lg flex flex-col items-center justify-center">
                           <FontAwesomeIcon icon={faNode} size='2xl' beatFade style={{color:"#68A063"}} / >
                           <span className="text-white text-sm">Nodejs</span>
                        </div>
                        
                        
                    </div>

                    <div className="min-w-[150px] h-[150px] bg-[#112233] rounded-lg flex text-2xl flex-col items-center justify-center">
                        <div className="min-w-[150px] h-[150px] bg-[#112233] rounded-lg flex flex-col items-center justify-center">
                           <FontAwesomeIcon icon={faBootstrap} size='2xl' beatFade style={{color:"#563d7c"}}/ >
                           <span className="text-white text-sm">Bootstrap</span>
                        </div>
                        
                    </div>

                    <div className="min-w-[150px] h-[150px] bg-[#112233] rounded-lg flex text-2xl flex-col items-center justify-center">
                        <div className="min-w-[150px] h-[150px] bg-[#112233] rounded-lg flex flex-col items-center justify-center">
                        <img src="public/mongodb.svg" className='h-12 w-12' alt="mongodb" />
                           <span className="text-white text-sm">MnogoDb</span>
                        </div>
                        
                        
                    </div>

                    <div className="min-w-[150px] h-[150px] bg-[#112233] rounded-lg flex text-2xl flex-col items-center justify-center">
                        <div className="min-w-[150px] h-[150px] bg-[#112233] rounded-lg flex flex-col items-center justify-center">
                        <img src="public/Tailwind CSS.svg" className='h-12 w-12' alt="mongodb" />
                           <span className="text-white text-sm">Tailwind</span>
                        </div>
                        
                    </div>

                    <div className="min-w-[150px] h-[150px] bg-[#112233] rounded-lg flex text-2xl flex-col items-center justify-center">
                        <div className="min-w-[150px] h-[150px] bg-[#112233] rounded-lg flex flex-col items-center justify-center">
                        <img src="public/power-bi-icon.svg" className='h-12 w-12' alt="mongodb" />
                           <span className="text-white text-sm">PowerBI</span>
                        </div>
                        
                    </div>

                    <div className="min-w-[150px] h-[150px] bg-[#112233] rounded-lg flex text-2xl flex-col items-center justify-center">
                        <div className="min-w-[150px] h-[150px] bg-[#112233] rounded-lg flex flex-col items-center justify-center">
                        <img src="public/MySQL.svg" className='h-12 w-12' alt="mongodb" />
                           <span className="text-white text-sm">MySQL</span>
                        </div>
                        
                        
                    </div>

                    





                </div>

            </div>
        </section>
    );
}

export default Skills;

