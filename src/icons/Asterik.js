import React from 'react';

const Asterik = ({
                   style = {},
                   width = "55",
                   height = "55",
                   className = "",
                   viewBox="0 0 55 55",
               }) => (
    <svg
        width={width}
        style={style}
        height={height}
        viewBox={viewBox}
        xmlns="http://www.w3.org/2000/svg"
        className={`svg=icon ${className || ""}`}
    >
        <path d="M13.814 36.69L15.638 23.154L4.886 31.602L0.278 23.442L12.854 18.45L0.374001 13.65L4.694 5.87399L15.734 14.226L13.814 0.497993H22.742L20.822 14.226L31.766 5.87399L35.99 13.554L23.51 18.546L36.086 23.538L31.574 31.506L20.822 23.154L22.646 36.69H13.814Z" fill="000" />
    </svg>
);

export default Asterik;