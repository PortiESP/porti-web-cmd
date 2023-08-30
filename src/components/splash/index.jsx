import { useCallback, useEffect, useRef, useState } from "react"
import scss from "./splash.module.scss"

const NUMBER_OF_OPTIONS = 2
// prettier-ignore
const TIP = [
    <>Use the <b>ARROWS</b> to navigate, then press <b>ENTER</b> to confirm the selection</>,
    <>Usa las <b>FLECHAS</b> para navegar, luego pulsa <b>ENTER</b> para confirmar la selección</>,
]

export default function Splash({ setScene }) {
  const [selected, setSelected] = useState(0)
  const $container = useRef(null)

  const keyEvent = useCallback(
    (e) => {
      const key = e.key.toLowerCase()
      if (key === "arrowup") setSelected((old) => (old + NUMBER_OF_OPTIONS - 1) % NUMBER_OF_OPTIONS)
      else if (key === "arrowdown") setSelected((old) => (old + 1) % NUMBER_OF_OPTIONS)
      else if (key === "enter") {
        localStorage.setItem("lang", ["en", "es"][selected])
        setScene(1)
      }
    },
    [selected]
  )

  useEffect(() => {
    $container.current.focus()
  }, [])

  return (
    <div className={scss.wrap} tabIndex={0} onKeyDown={keyEvent} ref={$container}>
      <div className={scss.menu}>
        <div className={scss.menu__title}>0xPorti</div>
        <div className={scss.menu__select}>
          <span className={scss.menu__tip}>{TIP[selected]}</span>
          <br />
          <span
            className={[scss.item, selected === 0 && scss.selected].join(" ")}
            onClick={() => {
              setSelected(0)
              selected === 0 && keyEvent({ key: "enter" })
            }}
          >
            Boot headless OS <span className={scss.item__lang}>(English) default</span>
          </span>
          <span
            className={[scss.item, selected === 1 && scss.selected].join(" ")}
            onClick={() => {
              setSelected(1)
              selected === 1 && keyEvent({ key: "enter" })
            }}
          >
            Boot headless OS <span className={scss.item__lang}>(Spanish)</span>
          </span>
        </div>
      </div>
    </div>
  )
}
