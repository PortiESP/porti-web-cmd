import AsyncLine from "../components/terminal_web/components/async_line/async_line"
import Color from "../components/terminal_web/components/color/color"
import { lazy } from "react"

// Content
import art from "./0xporti_pixel_art"
import { LOCALE_introduction } from "../locales/introduction"

// Commands
import { LOCALE_help } from "../locales/commands/help"
import { LOCALE_about } from "../locales/commands/about"
import { LOCALE_skills } from "../locales/commands/skills"
import { LOCALE_projects } from "../locales/commands/projects"
import { LOCALE_social } from "../locales/commands/social"
import { LOCALE_superheroes } from "../locales/commands/superheroes"
const Shutdown = lazy(() => import("../components/shutdown"))
const StarHunter = lazy(() => import("./commands/run/star_hunter"))
const TicTacToe = lazy(() => import("./commands/run/tictactoe"))
// const Chat = lazy(() => import("./commands/run/chat"))

const initialMessage = [...art, ...LOCALE_introduction]
const prefix = "[user@0xPorti] ~/Documents$ "
const error = <Color red>Command not recognized, type "help" to print the list of available commands</Color>

// Commands list must include an "error" command
// DO not forget to add the commands to the "help" menu
const commands = {
  shutdown: Shutdown,
  error, // Do not use this one
  help: LOCALE_help,
  about: <AsyncLine duration={1000}>{LOCALE_about}</AsyncLine>,
  projects: LOCALE_projects,
  skills: <AsyncLine duration={1000}>{LOCALE_skills}</AsyncLine>,
  social: LOCALE_social,
  superheroes: LOCALE_superheroes,
  language: () => localStorage.setItem("last_seen", 0) || location.reload(),
  github: () => window.open("https://github.com/PortiESP/porti-web-cmd", "_blank").focus(),
  "run StarHunter": StarHunter,
  "run TicTacToe": TicTacToe,
  // "run Chat": Chat,
}

export { commands, prefix, initialMessage }
