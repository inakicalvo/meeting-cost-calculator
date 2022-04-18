import React from 'react'

const Footer = () => {

    const d = new Date();
  return (
    <footer>&#169; {d.getFullYear()} - Built with patience and React JS by <a href="https://www.linkedin.com/in/inakicalvo" rel="noopener noreferrer" target="_blank">Iñaki Calvo</a>.</footer>
  )
}

export default Footer