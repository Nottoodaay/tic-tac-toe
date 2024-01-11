
export const NextRoundPopUp = (props:{
  setValue: (value: Array< null | string >) => void,
  setIsGameEnd: (value: boolean) => void
  status: string,
}) => {
  const nextRound = () =>{
    props.setValue(Array(9).fill(null))
    props.setIsGameEnd(false)
  }
  return (
    <div className=" w-[100vw] h-[100vh] 
    fixed top-0 bg-[#000000] bg-opacity-50  
    flex items-center justify-center">
        <div className=" w-full h-[228px] bg-[#1F3641] 
        flex items-center justify-center flex-col">
          
          <div className={` text-2xl font-bold 
          ${props.status === 'x' ? 'text-[#31C3BD]' 
          :
           'text-[#F2B137]'}`}>{props.status} TAKES THE ROUND</div>

          <div className=" flex gap-4">
              <button 
              onClick={nextRound} 
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
