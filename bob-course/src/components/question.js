let Opinion = (props) => {
    console.log(props)
    let styles = {
        color: "blue"
    }
    return (
   <div>
       <h1>{props.box}</h1>
       <h2>{props.ok}</h2>

   </div>
    )
}

// Opinion.defaultProps = {
//     box : "Hey, what's up",ss
//     ok : 1
// }

Opinion.propTypes = {
    box: PropTypes.string.isRequired
}



export default Opinion
