const Data = ({name, from, handleClick}) => {
    return(
        <div>
            <h1 onClick = {handleClick}>Hey What is your name : My name is {name} and I am from {from}</h1>
        </div>
    )
}

export default Data