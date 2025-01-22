import React from 'react';
// import { faInstagram, } from '@fortawesome/free-brands-svg-icons';
import { faInstagram, faFacebook, faWhatsapp, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Form from './Form';

function Contact() {
    return (
        <div>
            <section
                class="py-16 px-8 lg:py-20 lg:px-16 bg-[#0c1a25] text-white"
                id="contact"
            >
                <div class="flex flex-col lg:flex-row justify-between items-start lg:space-x-8">

                    <div class="w-full lg:max-w-[45%] mb-8 lg:mb-0">
                        <h2 class="text-3xl md:text-4xl font-bold mb-5">
                            Contact <span class="text-[#00f0ff]">Me</span>
                        </h2>
                        <p class="text-lg md:text-xl mb-4 text-[#c4c4c4]">
                            Let's Work Together
                        </p>
                        <p class="text-base md:text-lg mb-4 text-[#c4c4c4]">
                            Arman Ali
                        </p>
                        <p class="text-base md:text-lg mb-4">
                            <strong class="text-white">Email:</strong> armaanali5601@gmail.com
                        </p>
                        <p class="text-base md:text-lg mb-4">
                            <strong class="text-white">Phone:</strong> 6201047778
                        </p>
                        <p class="text-base md:text-lg mb-4">
                            <strong class="text-white">Address:</strong> Lucknow, UttarPradesh, India
                        </p>
                        <div class="flex space-x-4">
                            <a href='https://www.instagram.com/armcasm1/'> <FontAwesomeIcon icon={faInstagram} className='text-white text-2xl transition duration-300 hover:text-[#00f0ff] hover:text-3xl ' /></a>
                            <a href='https://www.facebook.com/profile.php?id=100050180436735&mibextid=ZbWKwL'> <FontAwesomeIcon icon={faFacebook} className='text-white text-2xl transition duration-300 hover:text-[#00f0ff] hover:text-3xl ' /></a>
                            <a href='https://wa.me/+916201047778'> <FontAwesomeIcon icon={faWhatsapp} className='text-white text-2xl transition duration-300 hover:text-[#00f0ff] hover:text-3xl ' /></a>
                            <a href='https://www.linkedin.com/in/armaan-ali18/'><FontAwesomeIcon icon={faLinkedin} className='text-white text-2xl transition duration-300 hover:text-[#00f0ff] hover:text-3xl ' /></a>
                            <a href='https://github.com/Armcode1'> <FontAwesomeIcon icon={faGithub} className='text-white text-2xl transition duration-300 hover:text-[#00f0ff] hover:text-3xl ' /></a>

                        </div>
                    </div>

                    <Form/>


                </div>
            </section>


        </div>
    )
}

export default Contact;
