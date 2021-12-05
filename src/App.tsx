import React, { useState, useEffect } from 'react';
import FancyLink from './reusable/FancyLink';

import profilePicUrl from './assets/profilePic.jpeg';
import instagramImgUrl from './assets/instagram.png';
import githubImgUrl from './assets/github.png';
import linkedinImgUrl from './assets/linkedin.png';

import CSS from './App.module.css';

const RESUME_LINK =
  'https://docs.google.com/document/d/1hDWX-ajZp1apR2rAwNDuaDgTmJFQoGTe/edit?usp=sharing&ouid=102337792161325988174&rtpof=true&sd=true';

function App() {
  useEffect(() => {
    console.log(
      "%c Thanks for checking out my site! Check out my Github while you're here if you want to see the real source.",
      'background-color: black; color: #b200f0; display: block; padding: 1em; text-align: center; font-family: Arial; font-size: 1.2em',
    );
    console.log('https://github.com/egrodo');
  }, []);

  return (
    <header className={CSS.Header}>
      <div className={CSS.profileImgContainer}>
        <img src={profilePicUrl} className={CSS.profileImg} alt="Noah Yamamoto" />
      </div>
      <div className={CSS.introContainer}>
        <div>Hi there, I&apos;m</div>
        <span className={CSS.fancyGradient}>
          <span className={CSS.fancyName}>Noah Yamamoto</span>
        </span>
      </div>
      <div className={CSS.blurbContainer}>
        <p>
          I&apos;m a frontend developer in NYC. I love making things on the web and have worked for cool companies like
          Marvel, Squarespace, and currently Meta.
        </p>
        <FancyLink
          to={RESUME_LINK}
          style={{
            fontFamily: 'Work Sans',
          }}
          newTab
        >
          Full Résumé
        </FancyLink>
      </div>
      <div className={CSS.socialContainer}>
        <a href="https://instagram.com/egrodo" target="_blank" rel="noopener noreferrer" className={CSS.socialLink}>
          <img src={instagramImgUrl} className={CSS.socialImg} alt="Instagram Link" />
        </a>
        <a
          href="https://www.linkedin.com/in/~noah"
          target="_blank"
          rel="noopener noreferrer"
          className={CSS.socialLink}
        >
          <img src={linkedinImgUrl} className={CSS.socialImg} alt="Linkedin Link" />
        </a>
        <a href="https://github.com/Egrodo/" target="_blank" rel="noreferrer noopener" className={CSS.socialLink}>
          <img src={githubImgUrl} className={CSS.socialImg} alt="Github Link" />
        </a>
      </div>
    </header>
  );
}

export default App;
