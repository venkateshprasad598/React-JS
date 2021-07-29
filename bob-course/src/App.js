import React, { Component } from 'react'
import Joke from './components/Joke'
import productsData from './components/Main'
import Button from './components/Joke'

// const App = () => {
// let components = productsData.map((x) => {
//   return <Joke state = {x.state} capital = {x.Capital}/>
// })

// return(
//   <div>
// {components}
//   </div>
// )
// }

// class App extends Component{
//   constructor(){
//     super()
//     this.state = {
//      todos: productsData
//     }
//   }

//   render(){
//     let components = this.state.todos.map((x) =>{
//       return <Joke state = {x.state} capital = {x.Capital} key = {x.id}/> 
//     })

//     return(
//        <div>
//          {components}
//        </div>
//     )
//   }
// }

let click = () => {
  return alert("Clicked me")
}


function App(){
  return(
   <button onClick = {click} >Clike me</button>
  )
}

export default App