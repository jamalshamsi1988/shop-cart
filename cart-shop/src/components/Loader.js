//Gif
import spinner from '../assets/gif/spinner.gif';
import React from 'react'

const Loader = () => {
  return (
    <div>
      <img  src={spinner} alt="loading"/>
      <h1>Loading ...</h1>
    </div>
  )
}

export default Loader;
