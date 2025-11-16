import { useState } from 'react'
import EmailHeroValidate from './EmailHeroValidate'
import './App.css'
import TestImageChat from './TestImageChat'
import Versions from "./Versions/Version1"
import Version2 from "./Versions/Version2"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
   {/* <EmailHeroValidate/> */}
   {/* <TestImageChat/> */}
   <Versions/>
 {/* <Version2/> */}
 <div class="w-full h-170 bg-[linear-gradient(225deg,_#f8e9e8_0%,_white_40%,_#f8e9e8_100%)]">
</div>
<div className="relative rounded-2xl m-12">
  {/* gradient border layer */}
  <div className="absolute inset-0 rounded-2xl p-[4px] bg-[linear-gradient(90deg,_#75B7FF,_#D5A8FF,_#FF9BAD,_#FFD1A3)]"></div>

  {/* blur/glow layer (softens the edges) */}
  <div className="absolute inset-0 rounded-2xl pointer-events-none">
    <div className="absolute inset-0 rounded-2xl blur-md opacity-30 bg-[linear-gradient(90deg,_#75B7FF,_#D5A8FF,_#FF9BAD,_#FFD1A3)]"></div>
  </div>

  {/* content */}
  <div className="relative bg-white rounded-2xl p-6">
    Your content here
  </div>
</div>



    </>
  )
}

export default App
