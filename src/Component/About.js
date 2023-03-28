import React from 'react';
import { Link } from 'react-router-dom';

// Importing Css Files
import '../Component/Css/About.css';

// Importing Images
import myphoto from '../Component/Images/myphoto.png';

function About() {
  return (
    <>
      <div className='quote' data-aos='fade-out'>
        <h1>
          "Coding Is Not About <span className='color-m'> Learning </span>, It's
          About <span className='color-m'> Implementing</span>"
        </h1>
      </div>
      <div className='about-me'>
        <div className='left-sec' data-aos='fade-right'>
          <p>
            {' '}
            Hello, my name is Het and I am a Full Stack Developer with three
            years of experience in the field.
            <span className='color-pu'>
              {' '}
              During this time, I have worked on over 20 websites and have
              acquired a wealth of knowledge and experience.{' '}
            </span>{' '}
            My journey began with HTML, followed by a brief period of mastering
            CSS, and finally, I fell in love with JavaScript. Since then, I have
            honed my skills in React and am currently focusing on backend
            development using Node.js and MongoDB.
            <br />
            <br />
            <span className='light-br'>
              {' '}
              In the early stages of my career, I made a lot of mistakes, but I
              have learned valuable lessons from each of them. While developing
              my skills, I also had the opportunity to build a website that had
              over 100 users, which was a very satisfying experience. My passion
              for web development and my determination to continuously improve
              my skills motivates me to stay on top of the latest trends and
              technologies in the field. I am confident that my experience,
              skills, and dedication make me a valuable asset to any team.
            </span>
            <br />
            <br />
            Over the past year, I have developed an avid interest in two
            distinct areas - geopolitics and table tennis. My fascination with
            geopolitics was sparked by a YouTube channel, "World Affairs," which
            provided me with a deep understanding of global political issues.
            Meanwhile, table tennis has become a source of relaxation and
            recreation for me, often enjoyed through matches played with my
            father.
            <span className='color-pu'>
              {' '}
              I am excited to continue exploring new areas of interest and
              expanding my horizons as I move forward in my career.
            </span>
          </p>

          <div className='box-button'>
            <Link to='work' className='link-ab'>
              Contact Me
            </Link>
            <Link to='blogs' className='link-ab'>
              Blogs
            </Link>
          </div>
        </div>
        <div className='right-sec' data-aos='fade-left'>
          <img src={myphoto} alt='photo' />
        </div>
      </div>
    </>
  );
}

export default About;
