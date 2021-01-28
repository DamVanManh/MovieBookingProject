import React from 'react';

const Logo = (props) => {
  return (
    <img
      alt="Logo"
      src="/static/logo.svg"
      // src="/static/images/avata_1.png"
      {...props}
    />
  );
};

export default Logo;
