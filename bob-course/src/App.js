// import data from "react"
import React from "react"
import { useState, useEffect } from "react"

const App = () => {
    const [toggle, settoggle] = useState(false)
    


    return (
        <div>
            <button onClick={() => settoggle(!toggle)}>Show/Hide</button>
            {toggle && <NewApp />}
        </div>
    )
}

const NewApp = () => {
    const[size, setsize] = useState(window.innerWidth)
     
    useEffect(() => {

        window.addEventListener("resize",checksize)

        return () => {

            window.removeEventListener("resize",checksize)
        }
    }, [])  

    const checksize = () => {
        setsize(window.innerWidths)
    }

    return (
        <div>
           <h1>Window</h1>
           <h2>Size :{size}</h2>
        </div>
    )
    
}




//FETCH DATA ************************************************

// const App = () => {
//     const [isLoading, setisLoading] = useState(true)
//     const [user, setUser] = useState("[]")
//     const [error, setError] = useState(false)


//     const getFetch = async() => {
//         let response = await fetch("https://api.github.com/userss")
//         if(response.status >= 200 && response.status < 299) {
//             let data = await response.json()
//             setTimeout(() => {
//                 setisLoading(false)
//                 let newBata = data.map((bata) => {
//                     return <div>
//                         {bata.login}
//                     </div> 


//                 })
//                 setUser(newBata)
//             }, 3000);
//         } else {
//             setTimeout(()=> {
//                 setisLoading(false)
//                 setError(true)
//             }, 3000)
//     }
// }

//     useEffect(() => {
//         getFetch()
//         // fetch("https://api.github.com/users").then((response) => response.json()).then((data) => {
//         //     let bata = data.map((data) => { return <div key = {data.id}>{data.login}</div> })
//         //     setUser(bata)
//         // }).catch((error) => console.log(error))

//     }, []);


//     if(isLoading){
//         return <div>
//             <h1>Loading...</h1>
//         </div>
//     }else if(error){
//         return <div>Error..</div>
//     }else{
//         return <div>
//             <h1>{user}</h1>
//         </div>
//     }
// }






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





















