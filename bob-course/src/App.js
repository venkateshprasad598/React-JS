import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Aside from "./components/Aside/Aside";
import Product from "./components/Product/Product";
import Order from "./components/Orders/Order";
import Details from "./components/Details/Details";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/products" className="app__products">
            <Header />
            <div className="app__asideProduct">
              <Aside />
              <Product />
            </div>
          </Route>

          <Route path="/orders">
            <Header />
            <div className="app__asideProduct">
              <Aside />
              <Order />
            </div>
          </Route>

          <Route path="/details">
            <Header />
            <div className="app__asideProduct">
              <Aside />
              <Details />
            </div>
          </Route>

          <Route className="/">
            <Header />
            <div className="app__asideProduct">
              <Aside />
              <Home />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
export default App;

{
  /* <Route path="/checkout">
{/* <Header /> */
}
{
  /* <Checkout /> */
}
// </Route> */}

//*******************Operations********************************** */
// import React from "react";
// import { useState } from "react";
// const App = () => {
//   const [person, setPerson] = useState({ name: "", email: "" }); // object is created to help value to know current state
//   const [people, setpeople] = useState([]);
//   const [isEdit, setEdit] = useState(false);
//   const [isChanges, setChanges] = useState(false);
//   // console.log(person);
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     const newPerson = { ...person, [name]: value };
//     // console.log(newPerson);
//     setPerson(newPerson);
//   };

//   const handleClick = (e) => {
//     e.preventDefault();
//     if (person.name && person.email) {
//       const newSetPerson = { ...person, id: new Date().getTime() };
//       setpeople([...people, newSetPerson]);
//       setPerson({ ...person, name: "", email: "" }); // Value place a important role here
//       console.log([...people, newSetPerson]);
//     }
//   };

//   const handleRemove = (num) => {
//     const filter = people.filter((data) => {
//       return data.id !== num;
//     });
//     setpeople(filter);
//   };
//   const handleEdit = (num) => {
//     setEdit(true);
//     setChanges(true);
//     // console.log(num);
//     let myObject = people.findIndex((data) => data.id === num);
//     console.log(myObject);
//     let newPeople = people[myObject];
//     console.log(newPeople);
//     console.log(newPeople);
//     setPerson(newPeople);
//     console.log([...people]);
//   };

//   const handleChanges = (num) => {
//     let newObject = people.findIndex((data) => data.id === num);
//     console.log(newObject);

//     // const newSetPerson = { ...person, id: new Date().getTime() };
//     // setpeople([...people, newSetPerson]);
//     // let peopleArray = [...people, newSetPerson];
//     // console.log(people);
//     let newPeople = [...people];

//     // newPeople[newObject] =

//     console.log(newPeople);
//     newPeople[newObject] = person;
//     setpeople(newPeople);
//     // console.log(person);
//     console.log(newPeople);
//     setPerson({ name: "", email: "" });
//   };

//   return (
//     <div>
//       <form>
//         <div>
//           <input
//             type="text"
//             name="name"
//             onChange={handleChange}
//             value={person.name}
//             placeholder="FirstName"
//           />
//         </div>
//         <div>
//           <input
//             type="text"
//             name="email"
//             value={person.email}
//             onChange={handleChange}
//             placeholder="Email"
//           />
//         </div>
//         {/* {isEdit ? (
//           <button type="submit">Save Changes</button>
//         ) : (
//           <button onClick={handleClick} type="submit">
//             Submit
//           </button>
//         )} */}
//         <button onClick={handleClick} type="submit">
//           Submit
//         </button>
//       </form>
//       {people.map((data) => {
//         const { name, email, id } = data;
//         return (
//           <div key={id}>
//             <h1>{name}</h1>
//             <p>{email}</p>
//             <button onClick={() => handleRemove(id)}>Remove</button>
//             <button onClick={() => handleEdit(id)}>Edit</button>

//             {isChanges && (
//               <button onClick={() => handleChanges(id)}>Changes</button>
//             )}
//           </div>
//         );
//       })}
//     </div>
//   );
// };
// export default App;

// import React from "react";
// import { render } from "react-dom";
// import Persons from "./components/Person";
// import { Component } from "react";

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       person: [
//         { name: "Venkatesh", id: 1 },
//         { name: "Prasad", id: 2 },
//         { name: "Elon", id: 3 },
//       ],
//     };
//   }

//   handleChange = (e, num) => {
//     const Index = this.state.person.findIndex((data) => data.id === num);
//     console.log(Index);
//     const newPerson = [...this.state.person];
//     newPerson[Index].name = e.target.value;
//     this.setState({ ...this.state, person: newPerson });
//   };

//   render() {
//     return (
//       <div>
//         <Persons name={this.state.person} handleChange={this.handleChange} />
//       </div>
//     );
//   }
// }
// export default App;
// class App extends Component {
//   state = {
//     isOn: true,
//     ignoreProps: 1,
//   };
//   render() {
//     return (
//       <div>
//         <button
//           disabled={!this.state.isOn}
//           onClick={() => this.setState({ isOn: false })}
//         >
//           on
//         </button>
//         <button
//           disabled={this.state.isOn}
//           onClick={() => this.setState({ isOn: true })}
//         >
//           off
//         </button>
//         <br />
//         <br />
//         <button
//           onClick={() => this.setState({ ignoreProps: Math.random() * 100 })}
//         >
//           Ignore
//         </button>

//         {this.state.isOn ? <App1 ignore={this.state.ignoreProps} /> : null}
//       </div>
//     );
//   }
// }

// export default App;

// const App = () => {
//     const [travel, settravel] = useState({
//         person : [
//             {name : "London", age : 23, id : 1},
//             {name : "Paris", age : 23, id : 2},
//             {name : "Scotland", age : 23, id : 3},
//         ]
//     })
//     const [istrue, setistrue] = useState(false)

// const handleClick = () => {
//     setistrue(true)
//     settravel({zzzz
//         person : [
//             {name : "London", age : 23, id : 1},
//             {name : "Paris", age : 23, id : 2},
//             {name : "Scotl", age : 23, id : 3},
//         ]
//     })
// }

// let data = travel.person.map((data) => {
//         return <div key = {data.id}> <br />
//             <input type="text"
//                     name="{data.name}"
//                     onChange = {(e) => settravel({...travel.person, [e.target.name] : e.target.name})} />
//             <h1>Hey I am think of going to {data.name}</h1>
//         </div>
//     })
// return (

//     <div>

//         <button onClick={handleClick}>My Travel List</button>

//     {istrue ? data : null}

//     </div>
// )
// }

// import data from "./components/data";
// import { useState } from "react";

// const App = () => {
//   const [person, setperson] = useState({ firstName: "", email: "" });
//   const [people, setpeople] = useState([]);
//   const [isNotEntered, setisNotEntered] = useState(false);
//   // const remove = num => {
//   //     return setperson(person.filter((data) => {
//   //         return data.id !== num
//   //     }))
//   // }
//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     const newperson = { ...person, [name]: value };
//     setperson(newperson);
//   };

//   const handleClick = (e) => {
//     e.preventDefault();
//     if (person.firstName && person.email) {
//       let newpeople = { ...person, id: new Date().getTime() };
//       console.log(newpeople);
//       setpeople([newpeople]);
//       setperson({ firstName: "", email: "" });
//     } else {
//       setisNotEntered(true);
//       setTimeout(() => {
//         setisNotEntered(false);
//       }, 2000);
//     }
//   };

//   const remove = (num) => {
//     setperson(person.filter((data) => data.id !== num));
//   };

//   return (
//     <div className="theParent">
//       <form action="">
//         {isNotEntered && <p>PLease Enter Details</p>}
//         <div className="row formParent">
//           <div className="form-group col-lg-4" style={{ marginTop: "30px" }}>
//             <input
//               type="text"
//               name="firstName"
//               id="firstName"
//               value={person.firstName}
//               onChange={handleChange}
//               className="form-control"
//               placeholder="First Name"
//             />
//           </div>
//           <br />

//           <div className="form-group col-lg-4 " style={{ marginTop: "10px" }}>
//             <input
//               type="email"
//               name="email"
//               id="eamil"
//               value={person.email}
//               onChange={handleChange}
//               className="form-control"
//               placeholder="email"
//             />
//           </div>

//           <button
//             onClick={handleClick}
//             className="btn btn-danger"
//             style={{ width: "10%", marginTop: "20px" }}
//           >
//             Add
//           </button>
//         </div>

//         <div className="removeParent">
//           {people.map((data) => {
//             return (
//               <div key={data.id} className="remove">
//                 <h1>{data.firstName}</h1>
//                 <p>{data.email}</p>
//                 <button
//                   onClick={() => remove(data.id)}
//                   className="btn btn-danger"
//                 >
//                   remove
//                 </button>
//               </div>
//             );
//           })}
//         </div>
//       </form>
//     </div>

//     // <div className = "parent">
//     //     {person.map((data) => {
//     //         return <div key = {data.id} className = "Musk">
//     //         {data.name} <br />
//     //         <button onClick = {() => remove(data.id)} className = "btn btn-danger btn-sm" style = {{marginTop:"10px", marginBottom : "10px"}}>remove</button>
//     //         </div>
//     //     })}
//     //     <button className = "btn btn-danger" onClick = {() => setperson([])}>Clear All</button>
//     // </div>
//   );
// };
// export default App;

// const reducer = (state, action) => {
//     if(action.type === "MYTYPE"){
//         const newitems = [...state.people, action.ok]
//         console.log(newitems);
//         return{
//           ...state, people : newitems
//         }
//     }

//     if(action.istrue === true){
//       return {...state, isNotEntered : true}
//     }

//     if(action.istrue === false){
//         return {...state, isNotEntered : false}
//     }

//     // if(action.remove === "removed"){
//     //     return{...state, people : [], isNotEntered : false}
//     // }
//     if(action.type === "remove"){
//         let newpeople = state.people.filter((bata) => {
//             return bata.id !== action.payload
//         })
//         return {...state, people : newpeople}
//     }

//     console.log(state, action);
//     // return state
// }

// const initialState = {
//     people : [],
//     isNotEntered : false
// }

// const App = () => {
//     const [person, setname] = useState({firstName : "", email : "", age : ""})
//     // const [people, setpeople] = useState([])
//     // const [isNotEntered, setisNotEntered] = useState(false)
//     const [state, dispatch] = useReducer(reducer, initialState)

//     const handleChange = (event) => {
//         const {name, value} = event.target
//         let ook = {...person, [name] : value}
//         console.log(ook);
//         setname(ook)
//     }

//     const handleClick = (e) => {
//         e.preventDefault()
//         if(person.firstName && person.email && person.age){
//             const ppl = {...person, id : new Date().getTime()}
//             console.log(ppl);
//             dispatch({type : "MYTYPE", ok : ppl, clear : true})
//             setname({firstName : "", email : "", age : ""})
//             // let newpeople = {...person, id : 1}
//             // console.log(newpeople);
//             // setpeople([newpeople])
//             // setname({firstName : "", email : "", age : ""})
//         }else{
//                 dispatch({istrue : true})

//                 setTimeout(() => {
//                     dispatch({istrue : false})
//                 }, 2000);
//             }
//         }

//         // const remove = () => {
//         //     dispatch({remove : "removed"})
//         // }

//     return(
//         <div>
//             {state.isNotEntered && <p>Please enter detailes</p>}
//             <form action="">
//                 <div>
//                     <label htmlFor="name">firstName :</label>
//                     <input type="text"
//                              name="firstName"
//                              id="name"
//                              value = {person.firstName}
//                              onChange = {handleChange}  />
//                 </div>

//                 <div>
//                     <label htmlFor="email">email:</label>
//                     <input type="text"
//                              name="email"
//                              id="email"
//                              value = {person.email}
//                              onChange = {handleChange}  />
//                 </div>

//                 <div>
//                     <label htmlFor="age">Age :</label>
//                     <input type="text"
//                              name="age"
//                              id="age"
//                              value = {person.age}
//                              onChange = {handleChange} />
//                 </div>

//                 <button onClick = {handleClick}>Submit</button>
//             </form>

//             {state.people.map((data) => {
//                 return <div key = {data.id}>
//                     <h1>Hi {data.firstName}, </h1>
//                     <p>please confirm that this your email id : {data.email}</p>
//                     <p>great to here that you are{data.age}years old</p>
//                     <button onClick = {() => {dispatch({type : "remove", payload : data.id})
//                     }}>remove</button>
//                 </div>
//             })}
//         </div>
//     )
// }

// USEREDUCER
// var data = [
//     {name : "Venkates Prasad", id : 1},
//     {name : "Eiffel Tower", id : 2},
//     {name : "Tower Bridge", id : 3},
// ]

// const reducer = (state, action) =>{
//     console.log(state, action);
//     if (action.type === "ok"){
//         const items = [...state.people, action.payload]
//         return {
//             ...state, people : items
//         }
//     }
// }

// const initialState = {
//     people : [],
//     isNotEntered : false,
//     myText : "Please enter your name below"
// }

// const App = () => {
//     const [person, setperson] = useState("")
//     const [state, dispatch] = useReducer(reducer, initialState)

//     const handleClick = (e) =>{
//         e.preventDefault()
//         if(person){
//             const item = {id : new Date().getTime(), person}
//             dispatch({type: "ok", payload : item})
//         }
//     }

//     return (
//         <div>
//             {state.isNotEntered && <p>{state.myText}</p>}
//             <form action="">
//                 <div>
//                     <label htmlFor="">Name : </label>
//                     <input type="text"
//                         name="name"
//                         id="name"
//                         value = {person}
//                         onChange = {(e) => setperson(e.target.value)} />
//                 </div>

//                 <button type = "submit" onClick = {handleClick}>Submit</button>
//             </form>
//             {state.people.map((data) => {
//                 return <div key = {data.id}>
//                     <h1>{data.person}</h1>
//                 </div>
//             })}
//         </div>
//     )
// }

// CONTROLLED FORMS
// const App = () => {
//   const [person, setperson] = useState({name : "", email :"", age: ""})
//   const [people, setpeople] = useState([])

//   const handleChange = (event) => {
//     const {name, value} = event.target
//       setperson({...person, [name] : value})
//   }

//   const handleSubmit = (e) => {
//       e.preventDefault()
//       if (person.name && person.email && person.age){
//           let newPeople = {...person,  id : new Date().getTime().toString()}
//           console.log([newPeople]);
//           setpeople([...people, newPeople])
//           setperson({name : "", email :"", age: ""})
//       }
//   }

//     return (
//         <div>

//             <form>

//                 <div>
//                     <label htmlFor="name">Name : </label>
//                     <input type="text"
//                             name="name"
//                             id="name"
//                             value = {person.name}
//                             onChange = {handleChange}/>
//                 </div> <br />

//                 <div>
//                     <label htmlFor="email">Email : </label>
//                     <input type="email"
//                             name="email"
//                             id="email"
//                             value = {person.email}
//                             onChange = {handleChange}/>
//                 </div><br />

//                 <div>
//                     <label htmlFor="age">Age : </label>
//                     <input type="number"
//                             name="age"
//                             id="age"
//                             value = {person.age}
//                             onChange = {handleChange}/>
//                 </div>

//                 <button onClick = {handleSubmit}>Submit</button>
//             </form>
//             {/* <h1>ok</h1> */}

//             {people.map((data) => {
//                 return <div key = {data.id}>
//                     {data.name}
//                     {data.email}
//                     {data.age}
//                 </div>
//             })}
//         </div>
//     )
// }

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

// export default Radium(App)

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
