
import { useEffect, useState } from "react"
import { Square } from "./components/Square"

function App() {
  const [isX, setIsX] = useState(true)
  const [value, setValue] = useState<Array< null | string >>(Array(9).fill(null))
  const [status, setStatus] = useState<string>('')

  useEffect(()=>{
    const winner = countWinner(value)

    if(winner){
     setStatus(`Winner: ${winner}`) 
    }else{
      setStatus(`Next player:${isX ? 'X' : 'O'}`)
    }
  },[value, isX])

  const handleClick = (i: number) =>{
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
 
  return (
    <>
      <div className=" flex flex-col gap-[20px]">
        <h1>{status}</h1>
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

export default App
