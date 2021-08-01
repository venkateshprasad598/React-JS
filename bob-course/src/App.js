import React, { Component } from "react"
import Conditional from "./components/Joke"
import Controler from "./components/Joke"

// class App extends Component{
// constructor(){
//   super()
//   this.state = {
//     isLoding : true
//   }
//   // this.componentDidMount = this.componentDidMount.bind(this)
// }

// componentDidMount(){
//   setTimeout(() => {
//     this.setState({
//       isLoding : false 
//     })
//   }, 3000);
// }

// render(){
//   return(
//     <Conditional isLoading = {this.state.isLoding}/>
//   )
// }
// }

// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       isLoading: true
//     }
//   }

//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({
//         isLoading: false
//       })
//     }, 3000);
//   }


//   render() {
//     if (this.state.isLoading === true) {
//       return (
//         <h1>Hey wait..</h1>
//       )
//     }
//     return (
//       <Conditional />
//     )
//   }
// }



// Consitional Rendering - 2 
// class App extends Component{
// constructor(){
//   super()
//   this.state = {
//     unreadMessages : ["spam", "You have a mail from microsoft"]
//   }
// }

// render(){
//   return (
//     (this.state.unreadMessages.length > 1 && <h1> You have {this.state.unreadMessages.length} Messages</h1>)
//   )
// }


// }




// class App extends Component{
//   constructor(){
//     super()
//     this.state = {
//       log : true
//     }
//     this.log = this.log.bind(this)
//   }

//   log(){
//     if(this.state.log === true){

//       this.setState({
//         log : false
//       })

//     }

//     else{
//       this.setState({
//         log : true
//     })
//   }
// }

// render() {
//   var logBtn;
//   if(this.state.log === true){
//     logBtn = "Log Out"
//   }else{
//     logBtn = "Log In"
//   }
//     return(
//       <div>
//         <Controler isLoading = {this.state.log}/>
//         <button onClick = {this.log}>{logBtn}</button>
//       </div>
//     )
// }
// }


// class App extends Component{
//   constructor(){
//     super()
//     this.state = {
//       isLogged : true
//     }
//     this.log = this.log.bind(this)
//   }

// log(){
//   if(this.state.isLogged === true){
//     this.setState({
//       isLogged : false
//     })
//   }else{
//     this.setState({
//       isLogged : true
//     })
//   }
// }
//   render(){
//   var log
//   if(this.state.isLogged === true){
//     log = "Log Out"
//   }else{ 
//     log = "Log In"
//   }
//     return(
//       <div>
//         <Conditional isLoading = {this.state.isLogged}/>
//         <button onClick = {this.log}>{log} </button>
//       </div>
//     )
//   }
// }

class App extends Component {
  constructor() {
    super()
    this.state = {
      isLogged: true
    }
  }
 
  componentDidMount(){
    setTimeout(() => {
      this.setState({
        isLogged : false
      })
    }, 3000);
  }


  render() {
    return (
      <Conditional isLogged = {this.state.isLogged} />
    )
  }
}

export default App