import React from 'react';

// Css Files
import '../Component/Css/Home.css';

// Images
import ill from '../Component/Images/homelus.gif';

function Home() {
  return (
    <>
      <div className='main-home-area' data-aos='fade-out'>
        <div className='overview-desp'>
          <h1>
            Hello Everyone Myself , <span className='myname'> Het Shah </span>
          </h1>
          <p>
            I am a juvenile programmer and website architect hailing from Surat,
            India, who exhibits a keen proclivity for the acquisition of data
            science knowledge. My pastimes encompass the domains of computer
            programming, cricket, and table tennis.
          </p>
          <button>
            <a
              href='https://github.com/Hecoin4545'
              rel='noreferrer'
              target='_blank'
            >
              Github
            </a>
          </button>
          <button>
            <a
              href='https://www.instagram.com/hecoin45/'
              rel='noreferrer'
              target='_blank'
            >
              Instagram
            </a>
          </button>
        </div>
        <img src={ill} alt='' />
      </div>
    </>
  );
}

export default Home;
