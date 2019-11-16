import React from 'react';
import './Footer.css';


function Footer(){
    return (
      <footer className='footer'>
        <section className="link">
        <div className="logos">
          <a href="#home"><i className="fab fa-facebook-square fa-2x logo"></i></a>
          <a href="#home"><i className="fab fa-instagram fa-2x logo"></i></a>
          <a href="#home"><i className="fab fa-twitter fa-2x logo"></i></a>
          <a href="#home"><i className="fab fa-youtube fa-2x logo"></i></a>
        </div>
        <div className="sub-links">
          <ul>
            <li><a href="#home">Audio and Subtitles</a></li>
            <li><a href="#home">Audio Description</a></li>
            <li><a href="#home">Help Center</a></li>
            <li><a href="#home">Gift Cards</a></li>
            <li><a href="#home">Media Center</a></li>
            <li><a href="#home">Investor Relations</a></li>
            <li><a href="#home">Jobs</a></li>
            <li><a href="#home">Terms of Use</a></li>
            <li><a href="#home">Privacy</a></li>
            <li><a href="#home">Legal Notices</a></li>
            <li><a href="#home">Corporate Information</a></li>
            <li><a href="#home">Contact Us</a></li>
          </ul>
        </div>
      </section>
      </footer>

    )
} 

export default Footer 