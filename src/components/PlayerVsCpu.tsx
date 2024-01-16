import { useState, useMemo } from "react"
import { Square } from "./Square"
import { NextRoundPopUp } from "./NextRoundPopUp"
import { ResetPopUp } from "./ResetPopUp"

export const PlayerVsCpu = (props:{
  isX: boolean,
  setIsX: (value: boolean) => void,
  isCpuX: boolean,
  setPlayerVsPlayer: (value: boolean) => void,
  setPlayerVsCpu: (value: boolean) => void
}) => {
  const [value, setValue] = useState<Array<null | string>>(Array(9).fill(null));
  const [status, setStatus] = useState<string>('');
  const [isPlayerTurn, setIsPlayerTurn] = useState<boolean>(props.isX ? true : false)

  const [isGameEnd, setIsGameEnd] = useState<boolean>(false)
  const [isReset, setIsReset] = useState<boolean>(false)

  const [countX, setCountX] = useState<number>(0)
  const [countO, setCountO] = useState<number>(0)
  const [tie, setTie] = useState<number>(0)

  const [winnerCombo, setWinnerCombo] = useState<number[]>([]) 

  const handleClick = (i: number) => {
    if(value[i]!= null)
      return
  
    const updatedValue = [...value]
    updatedValue[i] = props.isX ? 'X' : 'O'

    setValue(updatedValue)
    setIsPlayerTurn(!isPlayerTurn)
  }

  const makeCpuMove = () =>{
      const emptySquares = value
        .map((square, index) => (square === null ? index : -1))
        .filter(index => index !== -1)

      if (emptySquares.length > 0) {
        const randomIndex = Math.floor(Math.random() * emptySquares.length)
        const cpuMove = emptySquares[randomIndex];

        const updatedValue = [...value];
        updatedValue[cpuMove] = props.isCpuX ? 'X' : 'O'; 

        setValue(updatedValue)
        setIsPlayerTurn(!isPlayerTurn)
    }
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
        setWinnerCombo([a,b,c])
        return squares[a] as string
      }
    }
    return null
  }

  const isBoardFull = (squares: Array<string | null>): boolean => {
    return squares.every((square) => square !== null);
  }

  
  const reset = () =>{
    setIsPlayerTurn(props.isX ? true : false)
    setValue(Array(9).fill(null))
    setIsReset(!isReset)
  }

  useMemo(() => {
    const winner = countWinner(value);

    if (winner) {
      if(winner === 'X'){
        setCountX(countX + 1)
        setIsGameEnd(!isGameEnd)
        setStatus('X')
      }
      if(winner === 'O'){  
        setCountO(countO + 1)
        setIsGameEnd(!isGameEnd)
        setStatus('O')
      }
    } else if (isBoardFull(value)) { 
      setTie(tie + 1);
      setIsGameEnd(!isGameEnd)
    } else {
      if(props.isX){
        setStatus(`${isPlayerTurn ? 'X' : 'O'} TURN`);
      }
      if(props.isCpuX){
        setStatus(`${isPlayerTurn ? 'O' : 'X'} TURN`);
      }
      
    }
    
    if(isPlayerTurn === false){
      if(winner){
        setIsPlayerTurn(props.isX ? true : false)
        return
      }
      const timeoutId = setTimeout(() => {
          makeCpuMove();
        }, 500);
        return () => clearTimeout(timeoutId);
    }
       
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, props.isX]);

  return (
    <div  className=" relative w-full flex flex-col gap-4 items-center">
       <div className=" flex flex-col gap-5">
        <div className=" flex gap-[48px]">
            <div className=" w-[72px] h-[32px] bg-[url('/assets/logo.svg')] bg-cover"></div>
            <h1 className=" w-[96px] h-[40px] bg-[#1F3641] 
            flex items-center justify-center 
            font-bold text-[#A8BFC9]
            rounded-xl border-b-4 border-[#10212A]">{status}</h1>
            
            <div  
            className=" cursor-pointer w-[40px] h-[40px] bg-[#A8BFC9] 
            rounded-xl border-b-4 border-[#6B8997] 
            flex items-center justify-center
            "
            onClick={reset}>
              <div className=" w-[14px] h-[14px] 
              bg-[url('/assets/icon-restart.svg')] bg-cover"></div>
            </div>
          </div>

        <div className=" flex gap-[20px]">
          <Square 
          value={value[0]} 
          handleClick={()=>handleClick(0)} 
          isPlayerX={props.isX}
          isWinner={winnerCombo.includes(0) ? true : false}
           />
           <Square 
           value={value[1]} 
           handleClick={()=>handleClick(1)} 
           isPlayerX={props.isX}
           isWinner={winnerCombo.includes(1) ? true : false}
           />
           <Square 
           value={value[2]} 
           handleClick={()=>handleClick(2)} 
           isPlayerX={props.isX}
           isWinner={winnerCombo.includes(2) ? true : false}
           />
        </div>
        <div className=" flex gap-[20px]">
          <Square 
          value={value[3]} 
          handleClick={()=>handleClick(3)} 
          isPlayerX={props.isX}
          isWinner={winnerCombo.includes(3) ? true : false}
           />
           <Square 
          value={value[4]} 
          handleClick={()=>handleClick(4)} 
          isPlayerX={props.isX}
          isWinner={winnerCombo.includes(4) ? true : false}
           />
           <Square 
          value={value[5]} 
          handleClick={()=>handleClick(5)} 
          isPlayerX={props.isX}
          isWinner={winnerCombo.includes(5) ? true : false}
           />
        </div>
        <div className=" flex gap-[20px] ">
        <Square 
          value={value[6]} 
          handleClick={()=>handleClick(6)} 
          isPlayerX={props.isX}
          isWinner={winnerCombo.includes(6) ? true : false}
           />
           <Square 
          value={value[7]} 
          handleClick={()=>handleClick(7)} 
          isPlayerX={props.isX}
          isWinner={winnerCombo.includes(7) ? true : false}
           />
           <Square 
          value={value[8]} 
          handleClick={()=>handleClick(8)} 
          isPlayerX={props.isX}
          isWinner={winnerCombo.includes(8) ? true : false}
           />
        </div>
      </div>

     <div className=" flex gap-5" >
          <div className=" w-[96px] h-[64px] 
          bg-[#31C3BD] rounded-xl items-center flex flex-col justify-center">
            <h3 className=" text-[#1A2A33] font-medium text-sm">
            {`X ${props.isX ? '(P1)' : '(CPU)'}`}
            </h3>
            <div className=" text-[#1A2A33] font-bold text-xl">
              {countX}
            </div>
          </div>
          <div className=" w-[96px] h-[64px] 
          bg-[#A8BFC9] rounded-xl items-center flex flex-col justify-center">
            <h3 className=" text-[#1A2A33] font-medium text-sm">TIES</h3>
            <div className=" text-[#1A2A33] font-bold text-xl">{tie}</div>
          </div>
          <div className=" w-[96px] h-[64px] 
          bg-[#F2B137] rounded-xl items-center flex flex-col justify-center">
            <h3 className=" text-[#1A2A33] font-medium text-sm">{`O ${props.isX ? '(CPU)' : '(P1)'}`}</h3>
            <div className=" text-[#1A2A33] font-bold text-xl">{countO}</div>
          </div>
        </div>
        
        {isGameEnd ? 
        <NextRoundPopUp 
        status={status} 
        setValue={setValue} 
        setIsGameEnd={setIsGameEnd} 
        setPlayerVsCpu={props.setPlayerVsCpu}
        setPlayerVsPlayer={props.setPlayerVsPlayer}
        setWinnerCombo={setWinnerCombo}
        />
        : null}

        {
          isReset ? 
          <ResetPopUp 
          setIsReset={setIsReset}
           onClick={reset}/> : null
        }

    </div>
  )
}
