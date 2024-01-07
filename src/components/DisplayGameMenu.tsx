
interface DisplayGameMenuInterface{
    setPlayerVsPlayer: (value: boolean) => void,
    setPlayerVsCpu: (value: boolean) => void,
}

export const DisplayGameMenu = ({setPlayerVsPlayer, setPlayerVsCpu}:DisplayGameMenuInterface) => {
  return (
    <div>
        <div className=" w-[328px] h-[206px] bg-[#1F3641] 
        rounded-2xl border-b-8 border-[#10212A] flex justify-center">
            <h2 className=" uppercase font-bold text-base" >Pick Player 1's mark</h2>

        </div>

        <div className=" w-[328px] h-[56px] bg-[#F2B137] 
        rounded-2xl .border-b-8 border-[#CC8B13] cursor-pointer"
        onClick={()=>setPlayerVsCpu(true)}
        >
            Player vs cpu
        </div>
        
        <div className=" w-[328px] h-[56px] bg-[#31C3BD] 
        rounded-2xl border-b-8 border-[#118C87] cursor-pointer" 
        onClick={()=>setPlayerVsPlayer(true)}
        >
            Player vs player
        </div>
    </div>
  )
}
