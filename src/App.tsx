import { useState } from "react"

import { PlayerVsPlayer } from "./components/PlayerVsPlayer"
import { DisplayGameMenu } from "./components/DisplayGameMenu"
import { PlayerVsCpu } from "./components/PlayerVsCpu"

function App() {

  const [playerVsPlayer, setPlayerVsPlayer] = useState<boolean>(false)
  const [playerVsCpu, setPlayerVsCpu] = useState<boolean>(false)

  return (
    <div className=" flex flex-col gap-[20px] bg-[#1A2A33] 
    h-[100vh] items-center justify-center">

      

      { 
      playerVsPlayer ? <PlayerVsPlayer/> 
      : 
      playerVsCpu ? <PlayerVsCpu/>
      :
      <DisplayGameMenu setPlayerVsCpu={setPlayerVsCpu} 
      setPlayerVsPlayer={setPlayerVsPlayer} />}
    </div>
  )
}

export default App
