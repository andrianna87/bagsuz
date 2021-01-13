import React from 'react';
import '../styles/BagsuzLogo.css'

const BagsuzLogo = ({
    style = {},
    fill = "none",
    width = "70",
    height = "68.5",
    className = "",
    viewBox = "0 0 120 118.5"
     }) => (
    <svg
        width={width}
        style={style}
        height={height}
        viewBox={viewBox}
        xmlns="http://www.w3.org/2000/svg"
        className={`svg=icon ${className || "logo"}`}
    >
        <path className="middleTriangle" d="M114.4 108.5H5.9L60.1 0l54.3 108.5zm-103.7-3h98.8L60.1 6.7l-49.4 98.8z"/>
        <path className="rightTriangle" d="M120 118.5L13 100.9 84.1 2.7 120 118.5zM18.2 98.7l97.5 16L83 9.3 18.2 98.7z"/>
        <path className="leftTriangle" d="M0 118.5L35.9 2.7 107 101 0 118.5zM37 9.3L4.3 114.8l97.5-16L37 9.3z"/>
    </svg>
);

export default BagsuzLogo;