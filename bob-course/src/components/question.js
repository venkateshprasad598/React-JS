import React from "react"

let Question = (props)=>{
    let styles = {
        padding: "20px",
        margin: "100px"
      }
    
    return (
        <div>
        <a href="#" style = {styles}>{props.home}</a>
        <a href="#" style = {styles}>{props.about}</a>
        <a href="#" style = {styles}>{props.contact}</a>
        </div>
    )
}

Question.propTypes = {
    home : propTypes.string.isRequired
}

export default Question