import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h3>This is 404</h3>
            <Link to="/">Go To Homepage</Link>
        </div>
    );
};

export default NotFound;