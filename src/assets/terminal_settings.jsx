import art from "./0xporti_pixel_art"
import introduction from "./introduction"

// Commands
import help from "./commands/help"
import about from "./commands/about"
import skills from "./commands/skills"
import social from "./commands/social"
import projects from "./commands/projects"
import superheroes from "./commands/superheroes"
import StarHunter from "./commands/run/star_hunter"
import TicTacToe from "./commands/run/tictactoe"
import Color from "../components/terminal_web/components/color/color"

const initialMessage = [...art, ...introduction]
const prefix = "[user@0xPorti] ~/Documents$ "
const error = <Color red>Command not recognized, type "help" to print the list of available commands</Color>

// Commands list must include an "error" command
// DO not forget to add the commands to the "help" menu
const commands = {
  help,
  about,
  social,
  projects,
  skills,
  superheroes,
  error, // Do not use this one
  github: () => window.open("https://github.com/PortiESP/porti-web-cmd", "_blank").focus(),
  "run StarHunter": StarHunter,
  "run TicTacToe": TicTacToe,
}

export { commands, prefix, initialMessage }
