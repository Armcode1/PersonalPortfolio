import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faReact, faHtml5, faCss3Alt, faFigma, faGitAlt, faGithub, faBootstrap, faNode, faPython } from '@fortawesome/free-brands-svg-icons';

function Skills() {
    const scrollContainerRef = useRef(null);
    const autoScrollRef = useRef(null);

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        const scrollSpeed = 2; // Adjust speed if needed

        const startAutoScroll = () => {
            autoScrollRef.current = setInterval(() => {
                scrollContainer.scrollLeft += scrollSpeed;
                if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
                    scrollContainer.scrollLeft = 0;
                }
            }, 20);
        };

        startAutoScroll();

        const handleMouseOver = () => clearInterval(autoScrollRef.current);
        const handleMouseOut = startAutoScroll;

        scrollContainer.addEventListener('mouseover', handleMouseOver);
        scrollContainer.addEventListener('mouseout', handleMouseOut);

        return () => {
            clearInterval(autoScrollRef.current);
            scrollContainer.removeEventListener('mouseover', handleMouseOver);
            scrollContainer.removeEventListener('mouseout', handleMouseOut);
        };
    }, []);

    const skills = [
        { type: "icon", icon: faHtml5, name: "HTML", color: "#f06529" },
        { type: "icon", icon: faCss3Alt, name: "CSS", color: "#3b67ce" },
        { type: "icon", icon: faJs, name: "JavaScript", color: "#FFD43B" },
        { type: "icon", icon: faReact, name: "React", color: "#63E6BE" },
        { type: "icon", icon: faPython, name: "Python", color: "#306998" },
        { type: "icon", icon: faGitAlt, name: "Git", color: "#f29945" },
        { type: "icon", icon: faGithub, name: "Github", color: "#fff" },
        { type: "icon", icon: faNode, name: "NodeJS", color: "#68A063" },
        { type: "icon", icon: faBootstrap, name: "Bootstrap", color: "#563d7c" },
        { type: "icon", icon: faFigma, name: "Figma", color: "#3b67ce" },
        { type: "img", src: "/mongodb.svg", name: "MongoDB" },
        { type: "img", src: "/Tailwind CSS.svg", name: "Tailwind" },
        { type: "img", src: "/power-bi-icon.svg", name: "PowerBI" },
        { type: "img", src: "/MySQL.svg", name: "MySQL" },
    ];

    return (
        <section id='Skills' className="bg-[#0c1a25] shadow-cyan-300 py-10 px-5 text-center">
            <h2 className="text-4xl text-white font-bold mb-6 relative inline-block">
                Skills
                <span className="absolute w-20 h-1 bg-[#6f42c1] rounded bottom-[-10px] left-1/2 transform -translate-x-1/2"></span>
            </h2>

            <div className="relative overflow-hidden flex items-center justify-start mt-6">
                <div ref={scrollContainerRef} className="flex gap-5 overflow-x-hidden whitespace-nowrap">
                    {[...skills, ...skills].map((skill, index) => (
                        <div key={index} className="min-w-[150px] h-[150px] bg-[#112233] rounded-lg flex flex-col items-center justify-center">
                            {skill.type === "icon" ? (
                                <FontAwesomeIcon icon={skill.icon} size='2xl' style={{ color: skill.color }} />
                            ) : (
                                <img src={skill.src} className='h-12 w-12' alt={skill.name} />
                            )}
                            <span className="text-white text-sm">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
