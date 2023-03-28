import React from 'react';

// Css Files
import './Css/Skills.css';

// Images
import html from '../Component/Images/html.png';
import css from '../Component/Images/css.png';
import js from '../Component/Images/js.png';
import react from '../Component/Images/react.png';
import bootstrap from '../Component/Images/bootstrap.png';

function Skills() {
  return (
    <>
      <div className='main-achievement-section' data-aos='fade-out'>
        <div className='heading'>
          <h1>"My Skills"</h1>
        </div>
        <div className='skills-sec'>
          <img src={html} alt='' />
          <img src={css} alt='' />
          <img src={js} alt='' />
          <img src={react} alt='' />
          <img src={bootstrap} alt='' />
        </div>
      </div>
    </>
  );
}

export default Skills;
