// function Conditional(props){
// if(props.isLoading === true){
//     return (
//         <h1>
//             Just a Minute...
//         </h1>
//     )
// } 
//     return (
//         <div>
//             <h1>Here we go</h1>
//         </div>
//     )
// }

// function Conditional(props){
//     return (
//        <div>
//            <h1>Here we go</h1>
//        </div>
//     )
    // if(props.isLoading == true) {
    //     return (
    //         <h1>Just a minute sir...</h1>
    //     )
    // }
    // return (
    //     <h1>Here is your answer dear friend</h1>
    // )
// }


// export default Conditional


// function Controler(props){
//     var message
//     if(props.isLoading === true){
//         message = "in"
//     }else{
//         message = "out"
//     }
// if(props.isLoading === true){

//     return (
//         <h1>You are currently Logged {message}</h1>
//     )
// }else{
//     return (
//         <h1>You are currently Logged {message}</h1>
//     )
// }
// }

function Conditional(props){
if(props.isLogged === true){
   return (
       <h1>Just a minute sir we are loading..</h1>
   )
} else{
return(
    <h1>Here we go</h1>
)
}

}

export default Conditional