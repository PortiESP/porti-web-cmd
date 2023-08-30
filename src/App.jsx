import scss from "./app.module.scss"
import { Suspense, lazy, useEffect, useState } from "react"
import Bootloader from "./components/bootloader"
import Splash from "./components/splash"
const TerminalWeb = lazy(() => import("./components/terminal_web/terminal_web"))

// CONSTANTS
const MINUTES_UNTIL_BOOT_AGAIN = 60 * 24
const TIME_UNTIL_BOOT_AGAIN = 1000 * 60 * MINUTES_UNTIL_BOOT_AGAIN

export default function App() {
  // Scene selector
  const [scene, setScene] = useState(
    !localStorage.last_seen || Date.now() - localStorage.last_seen > TIME_UNTIL_BOOT_AGAIN ? 0 : 2
  )
  // Terminal settings
  const [terminalSettings, setTerminalSettings] = useState(undefined)

  useEffect(() => {
    if (scene > 0) {
      import("./assets/terminal_settings").then((res) => {
        setTerminalSettings({ commands: res.commands, initialMessage: res.initialMessage, prefix: res.prefix })
      })
    }
  }, [scene])

  return (
    <div className={scss.wrapper}>
      {
        // prettier-ignore
        scene === 0 && <Splash setScene={setScene} /> ||
        scene === 1 && <Bootloader setScene={setScene} isLoaded={!!terminalSettings}/> ||
        scene === 2 && <Suspense>
                          <TerminalWeb {...terminalSettings}/>
                        </Suspense>
      }
    </div>
  )
}
