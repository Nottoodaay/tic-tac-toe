import logo from '/assets/logo.svg'

interface DisplayGameMenuInterface{
    setPlayerVsPlayer: (value: boolean) => void,
    setPlayerVsCpu: (value: boolean) => void,
    setIsX: (value: boolean) => void,
    setIsCpuX: (value: boolean) => void,
    isX: boolean
}

export const DisplayGameMenu = ({
    setPlayerVsPlayer, 
    setPlayerVsCpu, 
    setIsX,
    setIsCpuX,
    isX
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
    <div className=' flex flex-col items-center gap-[32px]'>
        <img className=' w-[72px] h-[30px]' src={logo} />
        
        <div className=" w-[328px] h-[206px] bg-[#1F3641] 
        rounded-2xl border-b-8 border-[#10212A] 
        flex flex-col items-center justify-center gap-5">
            <h2 className=" uppercase font-bold text-base text-[#A8BFC9]" >Pick Player 1's mark</h2>
            
            <div className=" cursor-pointer w-[280px] h-[72px] bg-[#1A2A33] 
            rounded-2xl flex justify-around items-center">
                <div
                 className={` bg-[${isX ? '#A8BFC9' : null}] bg-cover w-[130px] h-[54px] 
                 rounded-2xl flex items-center justify-center`}
                 onClick={()=>playerChoise('X')}>
                    <div className={` w-[32px] h-[32px]
                    ${ isX ? "bg-[url('../assets/icon-x-outline-dark.svg')]" 
                    : "bg-[url('../assets/icon-x-silver.svg')]"} bg-cover`}></div>
                 </div>
                 <div
                className={` bg-[${isX ? null : '#A8BFC9'}] bg-cover w-[130px] h-[54px] 
                rounded-2xl flex items-center justify-center`}
                 onClick={()=>playerChoise('O')}>
                    <div className={` w-[32px] h-[32px]
                    ${isX ? "bg-[url('../assets/icon-o-silver.svg')]" 
                    : "bg-[url('../assets/icon-o-outline-dark.svg')]" }
                      bg-cover`}></div>
                 </div>
            </div>
            <p className=' text-sm text-[#A8BFC9]'>REMEMBER : X GOES FIRST</p>
        </div>

        <div className=' flex flex-col gap-4'>
            <div className=" w-[328px] h-[56px] bg-[#F2B137] 
            rounded-2xl border-b-8 border-[#CC8B13] cursor-pointer
            font-bold flex justify-center items-center"
            onClick={()=>setPlayerVsCpu(true)}
            >
            NEW GAME (VS CPU)
            </div>
            
            <div className=" w-[328px] h-[56px] bg-[#31C3BD] 
            rounded-2xl border-b-8 border-[#118C87] cursor-pointer
            font-bold flex justify-center items-center
            " 
            onClick={()=>setPlayerVsPlayer(true)}
            >
                NEW GAME (VS PLAYER)
            </div>
        </div>
    </div>
  )
}
