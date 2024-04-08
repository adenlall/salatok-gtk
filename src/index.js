import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom'
import './index.css';
import './style/input.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ChangeLog from './components/changelog/ChangeLog';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/footer';
import About from './components/about/about';
import Policy from './components/privacy policy/policy';
import CookieConsent from "react-cookie-consent";

ReactDOM.render(
  <React.StrictMode>
    <Router>

      <div className='p-0 m-0 bg-[linear-gradient(180deg,#8cbdc8,#e8fffc,white)] dark:bg-[linear-gradient(0deg,#0a152a,#111827)]'>
        <Navbar />
        <Routes>
          <Route path='*' element={<App />} />
          <Route path='/ChangeLog' element={<ChangeLog />} />
          <Route path='/About' element={<About />} />
          <Route path='/privacy' element={<Policy />} />
          <Route path='/contact' element={<Policy />} />
        </Routes>

        <div className='w-full flex lg:flex-row flex-col items-stretch justify-center content-center space-y-4 space-x-0 lg:space-y-0 lg:space-x-4 p-4'>
          <CookieConsent>We uses cookies. By continuing to use this website, you agree to their use. See <NavLink to="/privacy" className="hover:text-cyan-400 dark:hover:text-cyan-800 dark:text-cyan-400 text-cyan-800">privacy policy</NavLink> for more info..</CookieConsent>
          <Footer />
        </div>
      </div>

    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
