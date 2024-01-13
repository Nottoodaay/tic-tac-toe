
interface SquareProps{
    value: string | null,
    isPlayerX: boolean,
    handleClick: ()=> void,
}

export const Square = ({value, handleClick, isPlayerX}:SquareProps) => {

  const x = <div className=" w-[40px] h-[40px] 
  bg-[url('assets/icon-x.svg')] bg-cover "></div>

  const o = <div className="  w-[40px] h-[40px] 
  bg-[url('assets/icon-o.svg')] bg-cover" ></div>
  
  const hoover = <div className={` w-[40px] h-[40px] bg-cover
  ${isPlayerX ? ' hover:bg-[url("assets/icon-x-outline.svg")]' 
  : ' hover:bg-[url("assets/icon-o-outline.svg")]'}
  `}></div>

  return (
    <button 
    className={` w-[96px] h-[96px] bg-[#1F3641] 
    rounded-xl border-b-8 border-[#10212A] flex items-center justify-center`} 
    onClick={handleClick}
    >{value === 'X' ? x : value === 'O' ? o : hoover}</button>
  )
}
