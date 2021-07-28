import react from "react"
import Opinion from "./components/question"

let App = () => {
  return (
    <div>
      <Opinion box = "Hey" ok = "8"/>
      <Opinion/>
      <Opinion/>
    </div>
  )
}

export default App