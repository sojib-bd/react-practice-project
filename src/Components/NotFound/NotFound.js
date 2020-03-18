import React from 'react';

const NotFound = () => {
    const pageStyle = {
        textAlign: 'center',
        marginTop: '200px'
    }
    return (
        <div style={pageStyle}>
            <h1>Sorry, This page is not Found</h1>
            <h4>404</h4>
        </div>
    );
};

export default NotFound;