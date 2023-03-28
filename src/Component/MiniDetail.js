import React from 'react';

// Css Files
import '../Component/Css/MiniDetail.css';

// Images
import age from '../Component/Images/age.ico';
import blogs from '../Component/Images/blogs.ico';
import website from '../Component/Images/website.ico';

function MiniDetail() {
  return (
    <>
      <div className='imgcontainer' data-aos='fade-out'>
        <div className='image-desp-1 img-desp'>
          <img src={age} alt='Photo Age' />
          <p>16</p>
          <h1>My Age</h1>
        </div>
        <div className='image-desp-2 img-desp'>
          <img src={blogs} alt='Blogs Illustration' />
          <p>0</p>
          <h1>Total Blogs</h1>
        </div>
        <div className='image-desp-3 img-desp'>
          <img src={website} alt='Website Illustration' />
          <p>20+</p>
          <h1>Total Website</h1>
        </div>
      </div>
    </>
  );
}

export default MiniDetail;
