
interface SquareProps{
    value: string | null,
    handleClick: ()=> void,
}

export const Square = ({value, handleClick}:SquareProps) => {
  return (
    <button 
    className=" w-[96px] h-[96px] bg-[#1F3641] rounded-xl border-b-8 border-[#10212A]" 
    onClick={handleClick}
    >{value}</button>
  )
}
