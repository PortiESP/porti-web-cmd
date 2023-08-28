import { useCallback, useEffect, useState } from "react"
import useKBDListener from "../../../../components/terminal_web/hooks/use_kbd_events"
import scss from "./star_hunter.module.scss"

export default function Test(props) {
  const { ListenerProvider } = useKBDListener()
  const { Player, ...player } = usePlayer()
  const { Item, ...item } = useItem()
  const [score, setScore] = useState(0)

  const eventHandler = useCallback((e) => {
    console.log(e)
    if (e === "arrowright") player.addX(20)
    else if (e === "arrowleft") player.addX(-20)
    else if (e === "ctrl_c") props.exit()
  }, [])

  useEffect(() => {
    if (player.isTouching(item.position)) {
      setScore((old) => old + 1)
      item.setY(0)
      item.setX(Math.random() * window.innerWidth)
      item.faster()
    }
  }, [item.position])

  return (
    <ListenerProvider callback={eventHandler}>
      <span className={scss.score}>Score: {score}</span>
      <span className={scss.info}>
        <div>INSTRUCTIONS</div>
        <br />
        <div>
          <span className={scss.info__label}>Move the player to capture all the balls</span>
        </div>
        <br />
        <div>CONTROLS</div>
        <br />
        <div>
          <span className={scss.info__label}>Move player - </span>
          <span className={scss.info__control}>{"<ARROW_LEFT|ARROW_RIGHT>"}</span>
          <br />
          <span className={scss.info__label}>Quit game - </span>
          <span className={scss.info__control}>{"<CTRL+C>"}</span>
        </div>
      </span>
      <Item />
      <Player />
    </ListenerProvider>
  )
}

function usePlayer() {
  const [position, setPosition] = useState({ x: 300, y: 800 })
  return {
    position,
    setX: (k) => setPosition((old) => ({ x: k, y: old.y })),
    addX: (k) => setPosition((old) => ({ x: old.x + k, y: old.y })),
    setY: (k) => setPosition((old) => ({ y: k, x: old.x })),
    addY: (k) => setPosition((old) => ({ y: old.y + k, x: old.x })),
    isTouching: (pos) => {
      if (
        pos.x > position.x &&
        pos.y > position.y &&
        pos.x < position.x + window.innerWidth * 0.2 &&
        pos.y < position.y + 30
      )
        return true

      return false
    },
    Player: () => (
      <span style={{ transform: `translate(${position.x}px, ${position.y}px)` }} className={scss.player}>
        <span className={scss.bar}></span>
      </span>
    ),
  }
}

function useItem() {
  const [position, setPosition] = useState({ x: 500, y: 0 })
  const [speed, setSpeed] = useState(1)

  useEffect(() => {
    const INI = Date.now()
    setInterval(() => {
      setPosition((old) => ({
        x: old.y + 1 < window.innerHeight ? old.x : Math.random() * window.innerWidth,
        y: (old.y + 1 + (Date.now() - INI) * 0.00001) % window.innerHeight,
      }))
    }, 10)
  }, [])

  return {
    position,
    setX: (k) => setPosition((old) => ({ x: k, y: old.y })),
    addX: (k) => setPosition((old) => ({ x: old.x + k, y: old.y })),
    setY: (k) => setPosition((old) => ({ y: k, x: old.x })),
    addY: (k) => setPosition((old) => ({ y: old.y + k, x: old.x })),
    faster: () => setSpeed((old) => old + 0.1),
    Item: () => (
      <span style={{ transform: `translate(${position.x}px, ${position.y}px)` }} className={scss.item}></span>
    ),
  }
}
