import { useState } from "react"

function App() {
  const [text, settext ]=useState('')




 return(

<>
<h1>Hellow world</h1>
<form>


  <input onChange={(e)=>settext(e.target.value)} type="text" placeholder="enter text" />
<button type="submit">submit</button>
</form>
</>


 ) 
}

export default App