import React from 'react';

const ArrowDown = ({
                        style = {},
                        width = "11",
                        height = "11",
                        className = "",
                        viewBox="0 0 255 129",
                    }) => (
    <svg
        width={width}
        style={style}
        height={height}
        viewBox={viewBox}
        xmlns="http://www.w3.org/2000/svg"
        className={`svg=icon ${className || ""}`}
    >
        <path d="M0 .75l127.5 127.5L255 .75H0z" fill="#000"/>
    </svg>
);

export default ArrowDown;