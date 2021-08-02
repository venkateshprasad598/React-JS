import { Component } from "react";

class MemeGenerator extends Component{
constructor(){
    super()
   this.state={
       topText : "",
       bottomText: "",
       randomImg : "",
       allMessages : []
   }
   this.handleChange = this.handleChange.bind(this)
   this.generate = this.generate.bind(this)
}

componentDidMount(){
    fetch("https://api.imgflip.com/get_memes")
    .then(response => response.json())
    .then(ok => {
        const {memes} = ok.data
        // console.log(memes)
        this.setState({
            allMessages : memes
        })
    })
    this.handleChange = this.handleChange.bind(this)
   
}

handleChange(event){
 const {name, value} = event.target
 this.setState({
     [name] : value
 })
}

generate(event){
    event.preventDefault()
    let randomNum = Math.floor(Math.random() * this.state.allMessages.length)
    let memeMessage = this.state.allMessages[randomNum].url
    this.setState({
        randomImg : memeMessage
    })
}

render(){
    return(
        <div>
       <form>
           <h1>Welocome to meme generaoto</h1>
           <label>
                <input 
                type="text" 
                name="topText" 
                value = {this.state.topText}
                placeholder = "First Name"
                onChange = {this.handleChange}/>
            </label><br /><br />

            <label>
                <input 
                type="text" 
                name="bottomText" 
                value = {this.state.bottomText}
                placeholder = "Last Name"
                onChange = {this.handleChange}/>
            </label>

          <button onClick = {this.generate}>Gen</button>

       </form>

       <div>
           <img src={this.state.randomImg} alt="" className = "meme"/>
           <h1 className = "top">{this.state.topText}</h1>  
           {/* <h1 className = "bottom">{this.state.bottomText}</h1> */}
       </div>
       </div>
       
    )
}
}

export default MemeGenerator