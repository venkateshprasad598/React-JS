import React from 'react'
import Question from './components/question'

const App = () => {
  let styles1 = {
    backgroundColor : "black",
    color : "White",
  } 
  return (
    <div style = {styles1} >
      <Question home = "Home" about = "About" contact = "contact" />
    </div>
  )
}

export default App
