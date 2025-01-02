import React, { useEffect } from 'react';
import { faInstagram, faFacebook, faWhatsapp, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


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

        // Animate progress bars
        const progressBars = document.querySelectorAll('.progress-done');

        progressBars.forEach(bar => {
            setTimeout(() => {
                bar.style.width = bar.getAttribute('data-done') + '%';
                bar.style.opacity = 1;
            }, 500);
        });

        // Animate circular skills
        const circles = document.querySelectorAll('.circle');

        circles.forEach(circle => {
            let percent = circle.getAttribute('data-percent');
            circle.style.setProperty('--percent', percent);
        });
    }, []);

    return (
        <section className='flex flex-col-reverse md:flex-row justify-between items-center md:py-24 px-10 md:px-20 bg-[#0c1a25]'>
            <div className=" max-w-lg ">
                <h1 className='text-4xl font-bold leading-tight text-white'>
                    Hello, It's Me<br />
                    <span className='text-[#00f0ff]'>Arman Ali</span>
                    <br />
                    And I'm a <span className="typing-animation">Web Dev</span>
                </h1>
                <p className='my-5 text-lg leading-relaxed text-gray-400'>
                    "I'm a Fullstack Developer passionate about building and designing dynamic websites, creating intuitive frontend designs, and crafting impactful web solutions..."
                </p>
                <div className="social-links flex space-x-3">
                    <a href='https://www.instagram.com/armcasm1/'> <FontAwesomeIcon icon={faInstagram} className='text-white text-2xl transition duration-300 hover:text-[#00f0ff] hover:text-3xl ' /></a>
                    <a href='https://www.facebook.com/profile.php?id=100050180436735&mibextid=ZbWKwL'> <FontAwesomeIcon icon={faFacebook} className='text-white text-2xl transition duration-300 hover:text-[#00f0ff] hover:text-3xl ' /></a>
                    <a href='https://wa.me/+916201047778'> <FontAwesomeIcon icon={faWhatsapp} className='text-white text-2xl transition duration-300 hover:text-[#00f0ff] hover:text-3xl ' /></a>
                    <a href='https://www.linkedin.com/in/armaan-ali18/'><FontAwesomeIcon icon={faLinkedin} className='text-white text-2xl transition duration-300 hover:text-[#00f0ff] hover:text-3xl ' /></a>
                    <a href='https://github.com/Armcode1'> <FontAwesomeIcon icon={faGithub} className='text-white text-2xl transition duration-300 hover:text-[#00f0ff] hover:text-3xl ' /></a>


                </div>
                <a href="#" className="btn inline-block mt-5 mb-5 px-5 py-2 bg-[#00f0ff] text-[#09131c] font-bold rounded transition duration-300 hover:bg-[#00c4ff]">More About Me</a>
            </div>
            <div className=" flex items-center justify-center bg-gradient-to-r from-[#7600ff] to-[#00f0ff] rounded-full p-4 shadow-2xl shadow-cyan-300/40 mb-8 mt-5">
                <img src="public/my.jpg" alt="img" className='w-96 h-auto rounded-full shadow-2xl border-[10px] border-[#0c1a25] bg-gradient-to-r from-[#00f0ff] to-[#7600ff] p-1' />
            </div>
        </section>
    );
};

export default Home;
