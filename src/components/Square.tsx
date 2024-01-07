
interface SquareProps{
    value: string | null,
    handleClick: ()=> void,
}

export const Square = ({value, handleClick}:SquareProps) => {
  const x = <div className=" text-[#31C3BD] font-bold text-5xl" >{value}</div>
  const o = <div className=" text-[#F2B137] font-bold text-5xl" >{value}</div>
  return (
    <button 
    className=" w-[96px] h-[96px] bg-[#1F3641] rounded-xl border-b-8 border-[#10212A]" 
    onClick={handleClick}
    >{value === 'x' ? x : o}</button>
  )
}
