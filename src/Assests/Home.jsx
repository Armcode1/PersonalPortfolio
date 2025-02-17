import React, { useEffect } from 'react';
import { faInstagram, faFacebook, faWhatsapp, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ResumeButton from './ResumeButton';

const Home = () => {
    useEffect(() => {
        const words = ["Web Developer", "Web Designer", "Frontend Developer"];
        let wordIndex = 0;
        let charIndex = 0;
        let currentWord = '';
        const typingSpeed = 100;
        const erasingSpeed = 50;
        const newWordDelay = 2000;

        const typingElement = document.querySelector('.typing-animation');

        function type() {
            if (charIndex < words[wordIndex].length) {
                currentWord += words[wordIndex].charAt(charIndex);
                typingElement.textContent = currentWord;
                charIndex++;
                setTimeout(type, typingSpeed);
            } else {
                setTimeout(erase, newWordDelay);
            }
        }

        function erase() {
            if (charIndex > 0) {
                currentWord = currentWord.slice(0, -1);
                typingElement.textContent = currentWord;
                charIndex--;
                setTimeout(erase, erasingSpeed);
            } else {
                wordIndex = (wordIndex + 1) % words.length;
                setTimeout(type, typingSpeed + 1100);
            }
        }

        type();
    }, []);

    return (
        <section
            id="Home"
            className="relative flex flex-col-reverse md:flex-row justify-between items-center md:py-24 px-10 md:px-20 text-white"
            style={{
                backgroundImage: `url('https://i.gifer.com/1kc1.gif')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            {/* Overlay for better readability */}
            <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

            {/* Text Content */}
            <div className="relative z-10 max-w-lg">
                <h1 className="text-4xl font-bold leading-tight">
                    Hello, It's Me<br />
                    <span className="text-[#00f0ff]">Arman Ali</span>
                    <br />
                    And I'm a <span className="typing-animation">Web Dev</span>
                </h1>
                <p className="my-5 text-lg leading-relaxed">
                    "I'm a Fullstack Developer passionate about building and designing dynamic websites, creating intuitive frontend designs, and crafting impactful web solutions..."
                </p>
                <div className="social-links flex space-x-3">
                    <a href="https://www.instagram.com/armcasm1/">
                        <FontAwesomeIcon
                            icon={faInstagram}
                            className="text-2xl transition duration-300 hover:text-[#00f0ff] hover:text-3xl"
                        />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100050180436735&mibextid=ZbWKwL">
                        <FontAwesomeIcon
                            icon={faFacebook}
                            className="text-2xl transition duration-300 hover:text-[#00f0ff] hover:text-3xl"
                        />
                    </a>
                    <a href="https://wa.me/+916201047778">
                        <FontAwesomeIcon
                            icon={faWhatsapp}
                            className="text-2xl transition duration-300 hover:text-[#00f0ff] hover:text-3xl"
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/armaan-ali18/">
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            className="text-2xl transition duration-300 hover:text-[#00f0ff] hover:text-3xl"
                        />
                    </a>
                    <a href="https://github.com/Armcode1">
                        <FontAwesomeIcon
                            icon={faGithub}
                            className="text-2xl transition duration-300 hover:text-[#00f0ff] hover:text-3xl"
                        />
                    </a>
                </div>
                <ResumeButton />
            </div>

            {/* Profile Image */}
            <div className="relative z-10 flex items-center justify-center bg-gradient-to-r from-[#7600ff] to-[#00f0ff] rounded-full p-4 shadow-2xl shadow-cyan-300/40 mb-8 mt-20">
                <img
                    src="/my.jpg"
                    alt="img"
                    className="w-96 h-auto rounded-full shadow-2xl border-[10px] border-[#0c1a25] bg-gradient-to-r from-[#00f0ff] to-[#7600ff] p-1"
                />
            </div>
        </section>
    );
};

export default Home;
