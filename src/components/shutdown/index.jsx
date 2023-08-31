import { useEffect } from "react"
import scss from "./shutdown.module.scss"
import getLang from "../../utils/get_lang"

const LANG = getLang({
  en: {
    NO_SIGNAL: "No signal...",
    TIP: "refresh the page to reboot",
  },
  es: {
    NO_SIGNAL: "Sin señal...",
    TIP: "refresca la página para reiniciar",
  },
})

export default function Shutdown(props) {
  useEffect(() => {
    localStorage.setItem("last_seen", 0)
  }, [])
  return (
    <div className={scss.wrap} data-test="no-signal">
      <span className={scss.main}>{LANG.NO_SIGNAL}</span>
      <span className={scss.tip}>({LANG.TIP})</span>
    </div>
  )
}
