import { Component } from "react";
import Data from "./components/Data";

class App extends Component{
  state = {
    person : [
    {name : "Cali", locatedAt : "US"},
    {name : "Eiffel", locatedAt : "Paris"},
    {name : "Tower", locatedAt : "London"}
    ]
  }

handleClick = () => {
  this.setState({
    person : [
      {name : "California", locatedAt : "US"},
      {name : "Eiffel Tower", locatedAt : "Paris"},
      {name : "Tower Bridge", locatedAt : "London"}
      ]
  })
   
} 

  render(){
    return (
      <div>
        <Data name = {this.state.person[0].name} from = {this.state.person[0].locatedAt} handleClick = {this.handleClick}/>
      </div>
    )
  }


}

export default App



































































//   **************************** FORMS *******************************************************************

// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       firstName: "",
//       gender: "",
//       education: [],
//       declare: false
//     }
//     this.handChange = this.handChange.bind(this)
//   }


//   handChange(event) {
//     const { name, value, type, checked } = event.target
//     type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
//   }

//   render() {
//     return (
//       <form>
//         {/* FIRST NAME ***************************/}
//         <label>
//           <input
//             type="text"
//             name="firstName"
//             value={this.state.firstName}
//             onChange={this.handChange}
//             placeholder="First Name" />
//         </label><br /><br />

//         {/* LAST NAME *******************************/}
//         <label>
//           <input
//             type="text"
//             name="lastName"
//             // value = {this.state.firstName}
//             onChange={this.handChange}
//             placeholder="Last Name" />
//         </label> <br /><br />


//         {/* EMAIL **************************************/}
//         <label>
//           <input
//             type="text"
//             name="Email"
//             value={this.state.Email}
//             onChange={this.handChange}
//             placeholder="Email" />
//         </label><br /><br />

//         {/* AGE **************************************/}
//         <label>
//           <input
//             type="text"
//             name="Age"
//             // value = {this.state.firstName}
//             onChange={this.handChange}
//             placeholder="Age" />
//         </label><br /><br />

//         {/* RADIO **************************************/}
//         <label>
//           <input
//             type="radio"
//             name="gender"
//             value={"male"}
//             checked={this.state.gender === "male"}
//             onChange={this.handChange} /> Male
//         </label>
//         <label>
//           <input
//             type="radio"
//             name="gender"
//             value={"Female"}
//             checked={this.state.gender === "Female"}
//             onChange={this.handChange} /> Female
//         </label><br /><br />


//         {/* SELECT **************************************/}
//         <select
//           name="education"
//           onChange={this.handChange}>

//           <option value="">Education</option>
//           {/* Value will be displayed on the screen */}
//           <option value="B.E In Civil Engineering">B.E</option>
//           <option value="B.Tech">B.Tech</option>

//         </select><br /><br />

//         {/* CHECKBOX **************************************/}
//         <label>
//           <input
//             type="checkbox"
//             name="declare"
//             checked={this.state.declare}
//             onChange={this.handChange} /> I here my declare that all the above information are corret.
//         </label><br /><br />

//         {/* SUBIT************************************ */}
//         <button >Submit</button>

//         {/* DEATILES******************************* */}

//         <h1>Your Name : {this.state.firstName} {this.state.lastName}</h1>
//         <h1>Email : {this.state.Email}</h1>
//         <h1>Age : {this.state.Age}</h1>
//         <h1>Sex : {this.state.gender}</h1>
//         <h1>Eduaction : {this.state.education}</h1>
//         <h1>declare : {this.state.declare ? "Yes" : "Still not declared"}</h1>

//       </form>

//     )
//   }
// }

//   **************************** FORMS *******************************************************************



// export default App





















