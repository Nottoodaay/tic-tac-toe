
export const NextRoundPopUp = (props:{
  setValue: (value: Array< null | string >) => void,
  setIsGameEnd: (value: boolean) => void,
  setPlayerVsCpu: (value: boolean) => void,
  setPlayerVsPlayer: (value: boolean) => void,
  setWinnerCombo: (value: []) => void,
  setIsPlayerWinner: (value: string) => void
  isPlayerWinner: string
  status: string,
}) => {
  const nextRound = () =>{
    props.setValue(Array(9).fill(null))
    props.setIsGameEnd(false)
    props.setWinnerCombo([])
    props.setIsPlayerWinner('')
  }

  const quit = () =>{
    props.setValue(Array(9).fill(null))
    props.setPlayerVsPlayer(false)
    props.setPlayerVsCpu(false)
    props.setWinnerCombo([])
    props.setIsPlayerWinner('')
  }
  return (
    <div className=" w-[100vw] h-[100vh] 
    fixed top-0 bg-[#000000] bg-opacity-50  
    flex items-center justify-center">
        <div className=" w-full h-[228px] bg-[#1F3641] 
        flex items-center justify-center flex-col gap-6">
          
          {props.isPlayerWinner === 'ROUND TIED' ? null 
          : 
          <h2 className=" font-bold text-sm text-[#A8BFC9]">{props.isPlayerWinner}</h2>
          }
          

          {props.isPlayerWinner === 'ROUND TIED' ? 
            <div className=' text-2xl font-bold text-[#A8BFC9]'>ROUND TIED</div>
          : 
            <div className={` text-2xl font-bold 
            ${props.status === 'X' ? 'text-[#31C3BD]' 
            :
            'text-[#F2B137]'}`}>{props.status} TAKES THE ROUND</div>
          }
          

          <div className=" flex gap-4">
              <button 
              onClick={quit} 
              className=" w-[76px] h-[52px] rounded-xl 
              bg-[#A8BFC9] border-b-[#6B8997] border-b-4
              text-base font-bold text-[#1A2A33]
              "
              >Quit</button>
              <button 
              onClick={nextRound} 
              className=" w-[146px] h-[52px] rounded-xl 
              bg-[#F2B137] border-b-[#CC8B13] border-b-4 
                text-base font-bold text-[#1A2A33]
              "
              >Next Round</button>
          </div>
          
        </div>
    </div>
  )
}
