import React, { useState, useEffect } from 'react';
import '../src/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './Component/About';
import Footer from './Component/Footer';
import Home from './Component/Home';
import MiniDetail from './Component/MiniDetail';
import Navbar from './Component/Navbar';
import Project from './Component/Project';
// import Skills from './Component/Skills';
import FadeLoader from 'react-spinners/FadeLoader';

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <div className='spi-con'>
          <FadeLoader
            color={'#f5b82a'}
            loading={loading}
            size={30}
            aria-label='Loading Spinner'
            data-testid='loader'
            className='loader-spinner'
          />
        </div>
      ) : (
        <Router>
          <Switch>
            <Route path='/'>
              <Navbar />
              <Home />
              <MiniDetail />
              <About />
              <Project />
              <Footer />
            </Route>
          </Switch>
        </Router>
      )}
    </>
  );
}

export default App;
