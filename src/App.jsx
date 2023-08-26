import TerminalWeb from "./components/terminal_web/terminal_web"
import scss from "./app.module.scss"
import { initialMessage, prefix, commands } from "./assets/terminal_settings"

export default function App() {
  return (
    <div className={scss.wrapper}>
      <TerminalWeb prefix={prefix} initialMessage={initialMessage} commands={commands} />
    </div>
  )
}
