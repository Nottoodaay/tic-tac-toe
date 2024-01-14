
export const ResetPopUp = (props:{
    setIsReset: (value: boolean) => void
    onClick: () => void
}) => {
    const quit = () =>{
        props.setIsReset(false)
    }

  return (
    <div className=" w-[100vw] h-[100vh] 
    fixed top-0 bg-[#000000] bg-opacity-50  
    flex items-center justify-center">
        <div className=" w-full h-[228px] bg-[#1F3641] 
        flex items-center justify-center flex-col gap-6">
          
          <div className=" text-2xl font-bold text-[#A8BFC9]">RESTART GAME?</div>

          <div className=" flex gap-4">
              <button 
              onClick={quit} 
              className=" w-[140px] h-[52px] rounded-xl 
              bg-[#A8BFC9] border-b-[#6B8997] border-b-4
              text-base font-bold text-[#1A2A33]
              "
              >NO, CANCEL</button>
              <button 
              onClick={props.onClick} 
              className=" w-[146px] h-[52px] rounded-xl 
              bg-[#F2B137] border-b-[#CC8B13] border-b-4 
                text-base font-bold text-[#1A2A33]
              "
              >YES, RESTART</button>
          </div>
          
        </div>
    </div>
  )
}
