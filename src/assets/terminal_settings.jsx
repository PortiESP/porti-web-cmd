import art from "./0xporti_pixel_art"
import introduction from "./introduction"

// Commands
import help from "./commands/help"
import about from "./commands/about"
import skills from "./commands/skills"
import social from "./commands/social"
import projects from "./commands/projects"
import superheroes from "./commands/superheroes"
import Color from "../components/terminal_web/components/color/color"

const initialMessage = [...art, ...introduction]
const prefix = "Type a command >>> "
const error = <Color red>Command not recognized, type "help" to print the list of available commands</Color>

// prettier-ignore
// Commands list should include an "error" command
const commands = {
  help,
  about,
  social,
  projects,
  skills,
  superheroes,
  error,
  test: "hola"
}

export { commands, prefix, initialMessage }
