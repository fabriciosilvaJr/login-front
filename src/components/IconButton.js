import React from 'react';

const IconButton = ({ onClick, className, style }) => {
  return (
    <button onClick={onClick} className={className} style={{ ...buttonStyle, ...style }}>
      <img src={`${process.env.PUBLIC_URL}/images/icon-button-light.png`} alt="Icon Button" style={imageStyle} />
    </button>
  );
};

const buttonStyle = {
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
};

const imageStyle = {
  width: '48px',
  height: '48px',
};

export default IconButton;