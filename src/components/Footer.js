import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Général</h2>
            <Link to='/sign-up'>Job Board</Link>
            <Link to='/'>Contact</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Légal</h2>
            <Link to='/'>Termes et conditions</Link>
            <Link to='/'>Mention légales</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Nos réseaux sociaux</h2>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link to='/'>linkedin</Link>
            <Link to='/'>Twitter</Link>
            <Link to='/'>Instagram</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <small class='website-rights'>
            <h3 className='h3'> Copyright Bloom © 2021 – with love.</h3>
          </small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
