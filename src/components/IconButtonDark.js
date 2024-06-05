import React from 'react';

const IconButtonDark = ({ onClick, className, style }) => {
    return (
      <button onClick={onClick} className={className} style={{ ...buttonStyle, ...style }}>
        <img src={`${process.env.PUBLIC_URL}/images/icon-button-black.png`} alt="Icon Button Black" style={imageStyle} />
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

export default IconButtonDark;