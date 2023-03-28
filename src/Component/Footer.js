import React from 'react';
import '../Component/Css/Footer.css';
import { FaGithub, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <>
      <div className='main-area-footer'>
        <div className='left-sec-ft'>
          <div className='left-first-footer'>
            <h1 className='heading-footer'>Het Shah</h1>
            <p className='para-footer'>
              I am a juvenile programmer and website architect with a kenn
              interest in Data Science and Machine Learning
            </p>
          </div>
          <div className='socials-ft'>
            <a
              href='https://www.linkedin.com/in/het-shah-8a18b5242/'
              target='_blank'
              rel='noreferrer'
            >
              {' '}
              <FaLinkedinIn />
            </a>
            <a
              href='https://github.com/Hecoin4545'
              target='_blank'
              rel='noreferrer'
            >
              {' '}
              <FaGithub />
            </a>
            <a
              href='https://twitter.com/shahhet78200197'
              target='_blank'
              rel='noreferrer'
            >
              {' '}
              <FaTwitter />
            </a>
            <a
              href='https://www.instagram.com/hecoin45/'
              target='_blank'
              rel='noreferrer'
            >
              {' '}
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className='right-sec-ft'>
          <ul>
            <h1>Guide</h1>
            <li>Home</li>
            <li>Details</li>
            <li>About</li>
            <li>Projects</li>
          </ul>

          <ul>
            <h1>Socials</h1>
            <li>Insta</li>
            <li>Twitter</li>
            <li>Github</li>
            <li>Youtube</li>
            <li>Linkedin</li>
          </ul>

          <ul>
            <h1>Projects</h1>
            <li>Portfolio</li>
            <li>Hotel</li>
            <li>Heducation</li>
            <li>Python</li>
          </ul>

          <ul>
            <h1>Freelance</h1>
            <li>Linkedin</li>
            <li>Fiverr</li>
            <li>Funngrow</li>
            <li>Upwork</li>
            <li>Freelancer</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
