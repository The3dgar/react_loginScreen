import React, {useState} from 'react'
import "../styles/darkMode.scss"

export const DarkMode = () => {
  const [sun, setSun] = useState(false)
  const handleDarkMode = () => {
    let body = document.body
    body.classList.toggle("dark__mode")

    setSun(!sun)

  }



  return (
    <i className={sun ? "fas fa-sun dark__toggle" : "fas fa-moon dark__toggle"} onClick={handleDarkMode}></i>
  )
}
