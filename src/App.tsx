import { useState } from "react"

import { PlayerVsPlayer } from "./components/PlayerVsPlayer"
import { DisplayGameMenu } from "./components/DisplayGameMenu"
import { PlayerVsCpu } from "./components/PlayerVsCpu"

function App() {

  const [playerVsPlayer, setPlayerVsPlayer] = useState<boolean>(false)
  const [playerVsCpu, setPlayerVsCpu] = useState<boolean>(false)
  const [isX, setIsX] = useState<boolean>(true)
  const [isCpuX, setIsCpuX] = useState<boolean>(false)

  return (
    <div className=" flex flex-col gap-[20px] bg-[#1A2A33] items-center justify-center
    h-[100vh]">

      { 
      playerVsPlayer ? <PlayerVsPlayer isX={isX} setIsX={setIsX}/> 
      : 
      playerVsCpu ? <PlayerVsCpu isX={isX} setIsX={setIsX} isCpuX={isCpuX}/>
      :
      <DisplayGameMenu 
      setPlayerVsCpu={setPlayerVsCpu} 
      setPlayerVsPlayer={setPlayerVsPlayer} 
      setIsX={setIsX}
      setIsCpuX={setIsCpuX}
      />}
    </div>
  )
}

export default App
