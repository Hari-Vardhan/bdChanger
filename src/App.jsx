import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")
  var be="red";
  return (
    <div className="w-full h-screen duration-1000"
    style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full'>
          <button
          className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
          style={{backgroundColor:be}}
          onClick={()=>setColor(be)}>{be}</button>
          <button
          className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
          style={{backgroundColor:"black"}}
          onClick={()=>setColor("black")}>black</button>
          <button
          className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
          style={{backgroundColor:"blue"}}
          onClick={()=>setColor("blue")}>blue</button>
          <button
          className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
          style={{backgroundColor:"cyan"}}
          onClick={()=>setColor("cyan")}>cyan</button>
          <button
          className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
          style={{backgroundColor:"brown"}}
          onClick={()=>setColor("brown")}>brown</button>
          <button
          className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
          style={{backgroundColor:"pink"}}
          onClick={()=>setColor("pink")}>pink</button>
        </div>
      </div>
    </div>
  )
}

export default App
