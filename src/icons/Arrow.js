import React from 'react';

const Arrow = ({
                       style = {},
                       width = "17",
                       height = "17",
                       className = "",
                       viewBox="0 0 306 306",
                   }) => (
    <svg
        width={width}
        style={style}
        height={height}
        viewBox={viewBox}
        xmlns="http://www.w3.org/2000/svg"
        className={`svg=icon ${className || ""}`}
    >
        <path d="M94.35 0l-35.7 35.7L175.95 153 58.65 270.3l35.7 35.7 153-153z"/>
    </svg>
);

export default Arrow;