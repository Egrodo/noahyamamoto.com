import React from 'react';

import CSS from './FancyLink.module.css';

type PropTypes = {
  to: string;
  children: React.ReactChildren | string;
  style: React.CSSProperties;
  animated?: boolean;
  newTab?: boolean;
};

const FancyLink = ({ to, children, style, animated = false, newTab = false }: PropTypes) => {
  return (
    <a
      href={to}
      className={CSS.fancyLink}
      target={newTab ? '_blank' : '_self'}
      rel={newTab ? 'noopener noreferrer' : ''}
    >
      <span className={`${CSS.fancyLinkText} ${animated && CSS.animated}`} style={style}>
        {children}
      </span>
    </a>
  );
};

export default FancyLink;
