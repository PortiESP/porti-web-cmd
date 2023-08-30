import scss from "./app.module.scss"
import { initialMessage, prefix, commands } from "./assets/terminal_settings"
import { Suspense, lazy, useState } from "react"
import Bootloader from "./components/bootloader"
import Splash from "./components/splash"
import Shutdown from "./components/shutdown"
const TerminalWeb = lazy(() => import("./components/terminal_web/terminal_web"))

const MINUTES_UNTIL_BOOT_AGAIN = 60 * 24
const TIME_UNTIL_BOOT_AGAIN = 1000 * 60 * MINUTES_UNTIL_BOOT_AGAIN

export default function App() {
  // Hide the scene for
  const [scene, setScene] = useState(Date.now() - localStorage.last_seen > TIME_UNTIL_BOOT_AGAIN ? 0 : 2)

  return (
    <div className={scss.wrapper}>
      {
        // prettier-ignore
        scene === 0 && <Splash setScene={setScene} /> ||
        scene === 1 && <Bootloader setScene={setScene} /> ||
        scene === 2 && <Suspense>
                          <TerminalWeb prefix={prefix} initialMessage={initialMessage} commands={commands} />
                        </Suspense>
      }
    </div>
  )
}
