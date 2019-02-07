import React from 'react';
import ReactLoading from 'react-loading';
 
const LoadingScreen = ({ type, color }) => (
    <div className="main">
    <h2>Loading...</h2>
      <ReactLoading type={type} color={color} height={100} width={37} />
    </div>
);
 
export default LoadingScreen;