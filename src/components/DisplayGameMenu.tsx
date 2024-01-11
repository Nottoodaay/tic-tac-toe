
interface DisplayGameMenuInterface{
    setPlayerVsPlayer: (value: boolean) => void,
    setPlayerVsCpu: (value: boolean) => void,
    setIsX: (value: boolean) => void,
    setIsCpuX: (value: boolean) => void
}

export const DisplayGameMenu = ({
    setPlayerVsPlayer, 
    setPlayerVsCpu, 
    setIsX,
    setIsCpuX
}:DisplayGameMenuInterface) => {

    const playerChoise = (gameValue: string) =>{
        if(gameValue === "X"){
            setIsX(true)
            setIsCpuX(false)
        }
        if(gameValue === "O"){
            setIsX(false)
            setIsCpuX(true)
        }
    }

  return (
    <div>
        <div className=" w-[328px] h-[206px] bg-[#1F3641] 
        rounded-2xl border-b-8 border-[#10212A] 
        flex flex-col items-center justify-center gap-5">
            <h2 className=" uppercase font-bold text-base" >Pick Player 1's mark</h2>
            <div className=" cursor-pointer w-[280px] h-[72px] bg-[#1A2A33] 
            rounded-2xl flex justify-between items-center">
                <div onClick={()=>playerChoise('X')}>X</div>
                <div onClick={()=>playerChoise('O')}>O</div>
            </div>
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
