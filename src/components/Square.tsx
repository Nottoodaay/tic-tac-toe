
interface SquareProps{
    value: string | null,
    isPlayerX: boolean,
    handleClick: ()=> void,
    isWinner: boolean
}

export const Square = ({value, handleClick, isPlayerX, isWinner}:SquareProps) => {

  const x = <div className={` w-[40px] h-[40px] 
  ${isWinner && value === 'X' ? 'bg-[url("../assets/icon-x-outline-dark.svg")]' 
  : 'bg-[url("../assets/icon-x.svg")]'}
   bg-cover `}></div>

  const o = <div className={`  w-[40px] h-[40px] 
  ${isWinner && value === 'O' ? 'bg-[url("../assets/icon-o-outline-dark.svg")]' 
  : 'bg-[url("../assets/icon-o.svg")]'} bg-cover`} ></div>
  
  const hoover = <div className={` w-[40px] h-[40px] bg-cover
  ${isPlayerX ? ' hover:bg-[url("../assets/icon-x-outline.svg")]' 
  : ' hover:bg-[url("../assets/icon-o-outline.svg")]'}
  `}></div>

  return (
    <button 
    className={` w-[96px] h-[96px] 
    ${isWinner && value === "X" ? 'bg-[#31C3BD] border-[#118C87]'
    : isWinner && value === "O" ? 'bg-[#F2B137] border-[#CC8B13]'
    : 'bg-[#1F3641] border-[#10212A]' }  
    rounded-xl border-b-8 flex items-center justify-center`} 
    onClick={handleClick}
    >{value === 'X' ? x : value === 'O' ? o : hoover}</button>
  )
}
