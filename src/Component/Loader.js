import React, { useState, useEffect } from 'react';

function Loader() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <div className='load-container'>
      {/* {
            loading ?

            <ClipLoader
        color={color}
        loading={loading}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />

            :

        } */}
    </div>
  );
}

export default Loader;
