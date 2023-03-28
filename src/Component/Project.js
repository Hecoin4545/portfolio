import React from 'react';

// Css Files
import './Css/Project.css';

// Images
import project1 from '../Component/Images/project1.png';
import project2 from '../Component/Images/project2.png';
import project3 from '../Component/Images/project3.png';
import project4 from '../Component/Images/project4.png';
import project5 from '../Component/Images/project5.png';
import project6 from '../Component/Images/project6.png';

function Project() {
  return (
    <>
      <div className='container-pro'>
        <div className='heading-projects' data-aos='fade-out'>
          <h1>
            {' '}
            " Some Of My <span> Projects"</span>
          </h1>
        </div>
        <div className='sub-pro'>
          <div className='pro-1 projects' data-aos='fade-right'>
            <img src={project1} alt='' />
            <h1>Bootstrap Website</h1>
            <p>
              This project marks my initial foray into utilizing Bootstrap, and
              I approached it with a mindset of expanding my knowledge and
              capabilities within this framework. Despite being a novice, I
              successfully constructed...
            </p>
            <div className='work-program'>
              <p>HTML </p>
              <p>BOOTSTRAP </p>
              <p>JAVASCRIPT </p>
            </div>
            <div className='button'>
              <a
                href='https://hecoin4545.github.io/bootstrap-website/'
                target='_blank'
                className='btn'
                rel='noreferrer'
              >
                VISIT
              </a>
              <a
                href='https://github.com/Hecoin4545/bootstrap-website'
                target='_blank'
                className='btn'
                rel='noreferrer'
              >
                CODE
              </a>
            </div>
          </div>
          <div className='pro-2 projects' data-aos='fade-out'>
            <img src={project2} alt='' />
            <h1>M.M Naravane</h1>
            <p>
              Manoj Mukund Naravane is a distinguished Indian Army officer who
              currently serves as the Chief of Army Staff. He has served in
              several key appointments during his illustrious career.He Is One
              Of The Best...
            </p>
            <div className='work-program'>
              <p>React </p>
              <p>CSS </p>
              <p>JAVASCRIPT </p>
            </div>
            <div className='button'>
              <a
                href='https://hecoin4545.github.io/manoj-mukund-narvane/'
                target='_blank'
                className='btn'
                rel='noreferrer'
              >
                VISIT
              </a>
              <a
                href='https://github.com/Hecoin4545/manoj-mukund-narvane'
                target='_blank'
                className='btn'
                rel='noreferrer'
              >
                CODE
              </a>
            </div>
          </div>
          <div className='pro-3 projects' data-aos='fade-left'>
            <img src={project3} alt='' />
            <h1>Hecoin Restaurant</h1>
            <p>
              Hecoin Restaurant offers a sophisticated and modern dining
              experience with innovative cuisine, a sleek ambiance, and
              attentive service. The menu features fresh and high-quality
              ingredients, with highlight...
            </p>
            <div className='work-program'>
              <p>HTML </p>
              <p>Css </p>
              <p>JAVASCRIPT </p>
            </div>
            <div className='button'>
              <a
                href='https://hecoin4545.github.io/hecoin-restaurant/'
                target='_blank'
                className='btn'
                rel='noreferrer'
              >
                VISIT
              </a>
              <a
                href='https://github.com/Hecoin4545/hecoin-restaurant'
                target='_blank'
                className='btn'
                rel='noreferrer'
              >
                CODE
              </a>
            </div>
          </div>
          <div className='pro-4 projects' data-aos='fade-right'>
            <img src={project4} alt='' />
            <h1>Previous Portfolio</h1>
            <p>
              At the outset of my web development career, I constructed this
              portfolio with the recognition that it may not be of the highest
              aesthetic quality. Nonetheless, I viewed this as an opportunity to
              refine my skills...
            </p>
            <div className='work-program'>
              <p>HTML </p>
              <p>BOOTSTRAP </p>
              <p>JAVASCRIPT </p>
            </div>
            <div className='button'>
              <a
                href='https://hecoin4545.github.io/ShahHet.github.io/'
                target='_blank'
                className='btn'
                rel='noreferrer'
              >
                VISIT
              </a>
              <a
                href='https://github.com/Hecoin4545/ShahHet.github.io'
                target='_blank'
                className='btn'
                rel='noreferrer'
              >
                CODE
              </a>
            </div>
          </div>
          <div className='pro-5 projects' data-aos='fade-out'>
            <img src={project5} alt='' />
            <h1>Cookie Website</h1>
            <p>
              Cookie website is a platform for online marketers to comply with
              cookie consent laws. It provides customizable cookie banners,
              scanning, and consent management solutions for website owners.
            </p>
            <div className='work-program'>
              <p>HTML </p>
              <p>BOOTSTRAP </p>
              <p>JAVASCRIPT </p>
            </div>
            <div className='button'>
              <a
                href='https://hecoin4545.github.io/Cook-Key.github.io/'
                target='_blank'
                className='btn'
                rel='noreferrer'
              >
                VISIT
              </a>
              <a
                href='https://github.com/Hecoin4545/Cook-Key.github.io'
                target='_blank'
                className='btn'
                rel='noreferrer'
              >
                CODE
              </a>
            </div>
          </div>
          <div className='pro-6 projects' data-aos='fade-left'>
            <img src={project6} alt='' />
            <h1>SpeedRace Website</h1>
            <p>
              Typing race is an online competition where participants race
              against each other to type a given text accurately and quickly.
              The winner is determined by the lowest time and error count...
            </p>
            <div className='work-program'>
              <p>HTML </p>
              <p>BOOTSTRAP </p>
              <p>JAVASCRIPT </p>
            </div>
            <div className='button'>
              <a
                href='https://hecoin4545.github.io/SpeedRacer.github.io/'
                target='_blank'
                className='btn'
                rel='noreferrer'
              >
                VISIT
              </a>
              <a
                href='https://github.com/Hecoin4545/SpeedRacer.github.io'
                target='_blank'
                className='btn'
                rel='noreferrer'
              >
                CODE
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
