import { useCallback, useState } from "react"
import scss from "./splash.module.scss"

const NUMBER_OF_OPTIONS = 2

export default function Splash({ setScene }) {
  const [selected, setSelected] = useState(0)

  const keyEvent = useCallback((e) => {
    const key = e.key.toLowerCase()
    if (key === "arrowup") setSelected((old) => (old + NUMBER_OF_OPTIONS - 1) % NUMBER_OF_OPTIONS)
    else if (key === "arrowdown") setSelected((old) => (old + 1) % NUMBER_OF_OPTIONS)
    else if (key === "enter") setScene(1)
  }, [])

  return (
    <div className={scss.wrap} tabIndex={0} onKeyDown={keyEvent} onMouseMove={(e) => e.target.focus()}>
      <div className={scss.menu}>
        <div className={scss.menu__title}>0xPorti</div>
        <div className={scss.menu__select}>
          <span className={scss.menu__tip}>
            Use the <b>ARROWS</b> to navigate, then press <b>ENTER</b> to confirm the selection
          </span>
          <br />
          <span className={[scss.item, selected === 0 && scss.selected].join(" ")}>
            Boot headless OS <span className={scss.item__lang}>(English)</span>
          </span>
          <span className={[scss.item, selected === 1 && scss.selected].join(" ")}>
            Boot headless OS <span className={scss.item__lang}>(Spanish)</span>
          </span>
        </div>
      </div>
    </div>
  )
}
