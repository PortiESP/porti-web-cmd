import { useCallback, useEffect, useState } from "react"
import scss from "./game.module.scss"
import useKBDListener from "../../../../components/terminal_web/hooks/use_kbd_events"

const PLAYER_MARKER = "x"
const ENEMY_MARKER = "o"
const WIN_CONDITIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

export default function TicTacToe(props) {
  const { board, setTile, isEmpty, resetBoard } = useBoard()
  const [selected, setSelected] = useState(0)
  const { ListenerProvider } = useKBDListener()
  const [gameState, setGameState] = useState(-1) // (-1 ~ playing) (0 ~ Player win) (1 ~ Enemy win) (2 ~ Draw)
  const [isPlayerTurn, setIsPlayerTurn] = useState(true)
  const boardFull = useCallback(() => !board.filter((t) => t !== PLAYER_MARKER && t !== ENEMY_MARKER).length, [board])

  const handleEvents = useCallback(
    (e) => {
      // Functions
      const isValid = (value) => value >= 0 && value <= 8

      // Controls
      if (e === "arrowright") setSelected((old) => (isValid(old + 1) ? old + 1 : old))
      else if (e === "arrowleft") setSelected((old) => (isValid(old - 1) ? old - 1 : old))
      else if (e === "arrowup") setSelected((old) => (isValid(old - 3) ? old - 3 : old))
      else if (e === "arrowdown") setSelected((old) => (isValid(old + 3) ? old + 3 : old))
      else if (e === "ctrl_c") props.exit()
      else if (e === "space") {
        if (isEmpty(selected) && gameState === -1) {
          setTile(selected, PLAYER_MARKER)
          setIsPlayerTurn(false)
        }
      } else if (e === "r") {
        setGameState(-1)
        resetBoard()
      }
    },
    [selected, gameState]
  )

  useEffect(() => {
    const isBoardFull = board.filter((e) => e === "").length === 0
    if (!isPlayerTurn && !isBoardFull) {
      let rand
      do {
        rand = Math.floor(Math.random() * 9) % 9
      } while (!isEmpty(rand) || rand === selected)
      setTile(rand, ENEMY_MARKER)
      setIsPlayerTurn(true)
    }
  }, [selected, board, isPlayerTurn])

  // Handle game events
  useEffect(() => {
    if (gameState === -1) {
      // Handle win conditions
      WIN_CONDITIONS.forEach((arr) => {
        if (board[arr[0]] !== "" && board[arr[0]] === board[arr[1]] && board[arr[0]] === board[arr[2]]) {
          setGameState(board[arr[0]] === PLAYER_MARKER ? 0 : 1)
        }
      })

      // Draw
      if (boardFull() && gameState === -1) setGameState(2)
    }
  }, [board, gameState])

  return (
    <ListenerProvider callback={handleEvents}>
      <div className={scss.wrapper}>
        {/* prettier-ignore */}
        <pre>
        {String.raw`
     _   _      _             _             
    | | (_)    | |           | |            
    | |_ _  ___| |_ __ _  ___| |_ ___   ___ 
    | __| |/ __| __/ _${"`"} |/ __| __/ _ \ / _ \
    | |_| | (__| || (_| | (__| || (_) |  __/
     \__|_|\___|\__\__,_|\___|\__\___/ \___|
     
     `}

          
            <div className={scss.tips}>
              <span style={{textDecoration: "underline"}}>HOW TO PLAY</span><br/><br/>
              <span>Use the arrows to move</span><br/>
              <span>Press {"<SPACE>"} to mark the selected position</span><br/>
              <span>Press 'r' to restart</span><br/>
              <span>Press 'CTRL+C' to exit</span>
            </div>
            <div className={scss.status}>
              Game status: {gameState === -1 && "Playing..." || gameState === 0 && "Player X won!!!" || gameState === 1 && "Player O won!!!" || gameState === 2 && "Its a draw!"}
            </div>
          
          <div className={scss.grid}>{board.map((value,i)=><Tile key={i} value={value} isSelected={selected === i}></Tile>)}</div>
      </pre>
      </div>
    </ListenerProvider>
  )
}

//
function Tile({ isSelected, value }) {
  return <span className={[scss.tile, isSelected && scss.flag__selected].join(" ")}>{value}</span>
}

//
function useBoard() {
  const [board, setBoard] = useState(Array(9).fill(""))
  const isEmpty = (pos) => board[pos] !== PLAYER_MARKER && board[pos] !== ENEMY_MARKER
  const resetBoard = () => setBoard(Array(9).fill(""))

  const setTile = useCallback((pos, value) => {
    setBoard((old) => {
      const board = [...old]
      board[pos] = value
      return board
    })
  }, [])

  return { board, setTile, isEmpty, resetBoard }
}
