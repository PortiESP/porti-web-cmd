import { useEffect } from "react"
import scss from "./shutdown.module.scss"

export default function Shutdown(props) {
  useEffect(() => {
    localStorage.setItem("last_seen", 0)
  }, [])
  return (
    <div className={scss.wrap}>
      <span className={scss.main}>No signal...</span>
      <span className={scss.tip}>(refresh the page to power on)</span>
    </div>
  )
}
