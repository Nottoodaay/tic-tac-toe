import { useEffect, useState } from "react"
import { Square } from "./Square"

//      
export const PlayerVsPlayer = () => {
  const [isX, setIsX] = useState<boolean>(true)
  const [value, setValue] = useState<Array< null | string >>(Array(9).fill(null))
  const [status, setStatus] = useState<string>('')

  const [countX, setCountX] = useState<number>(0)
  const [countO, setCountO] = useState<number>(0)
  const [tie, setTie] = useState<number>(0)

  
  useEffect(()=>{
    const winner = countWinner(value)

    if(winner){
     setStatus(`Winner: ${winner}`) 
     if(winner === 'x'){
        setCountX(countX + 1)
     }
     if(winner === 'O'){
        setCountO(countO + 1)
     }
    }else if (isBoardFull(value)) {
        setStatus('It\'s a tie!');
        setTie(tie + 1)
    }else{
      setStatus(`Next player:${isX ? 'X' : 'O'}`)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[value, isX])

  const reset = () =>{
    setIsX(true)
    setValue(Array(9).fill(null))
  }

  const handleClick = (i: number) =>{
    if(value[i]!= null)
      return
    if(countWinner(value || value[i])){
      return
    }
    value[i] = isX ? 'x' : 'O'
    setValue(value)
    setIsX(!isX)
  }

  const countWinner = (squares: Array<string | null>): string | null => {
    const winnerLines: Array<Array<number>> = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]

    for(const [a,b,c] of winnerLines){
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
        return squares[a] as string
      }
    }
    return null
  }

  const isBoardFull = (squares: Array<string | null>): boolean => {
    return squares.every((square) => square !== null);
  }
  
  return (
    <>
      <div>
        <h1>{status}</h1>
        <div onClick={reset}>rest</div>
        <div className=" flex gap-[20px]">
          <Square value={value[0]} handleClick={()=>handleClick(0)} />
          <Square value={value[1]} handleClick={()=>handleClick(1)} />
          <Square value={value[2]} handleClick={()=>handleClick(2)} />
        </div>
        <div className=" flex gap-[20px]">
          <Square value={value[3]} handleClick={()=>handleClick(3)} />
          <Square value={value[4]} handleClick={()=>handleClick(4)} />
          <Square value={value[5]} handleClick={()=>handleClick(5)} />
        </div>
        <div className=" flex gap-[20px]">
          <Square value={value[6]} handleClick={()=>handleClick(6)} />
          <Square value={value[7]} handleClick={()=>handleClick(7)} />
          <Square value={value[8]} handleClick={()=>handleClick(8)} />
        </div>
      </div>
    </>
  )
}
