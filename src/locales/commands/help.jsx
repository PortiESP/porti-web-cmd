import Color from "../../components/terminal_web/components/color/color"
import getLang from "../../utils/get_lang"

const LOCALES = {
  en: {
    COMMANDS_TITLE: "Commands",
    COMMANDS: {
      HELP: "Print this information screen",
      ABOUT: "A bit more information about myself",
      SKILLS: "Tree of some of my most relevant skills",
      SOCIAL: "Links to my social media",
      PROJECTS: "Some personal projects I've made",
      SUPERHEROES: "Awesome online resources and content creators",
      GITHUB: "Open the project repo on Github",
      SHUTDOWN: "Run this command to preview the boot screen the next time the site loads",
    },
    MINIGAMES_TITLE: "Minigames",
    MINIGAMES: {
      TICTACTOE: "Classic TicTacToe board game",
      STARHUNTER: "Catch the falling items",
    },
    KEYBINDS_TITLE: "Keybinds",
    KEYBINDS: {
      TAB: "Paste suggested command",
      CTRL_L: "Clear Screen",
      ARROWS: "Rotate between commands history and shortcuts",
      CTRL_C: "Cancel the current prompt line",
    },
  },
  es: {
    COMMANDS_TITLE: "Comandos",
    COMMANDS: {
      HELP: "Muestra este menú de información",
      ABOUT: "Un poco más de información sobre mi",
      SKILLS: "Árbol de mis habilidades más destacadas",
      SOCIAL: "Links de mis redes sociales",
      PROJECTS: "Algunos proyectos personales",
      SUPERHEROES: "Créditos a los creadores y recursos online que utilizo",
      GITHUB: "Visitar el repositorio ge Github",
      SHUTDOWN:
        "Ejecuta este comando para visualizar la pantalla de carga otra vez la próxima vez que visites la página",
    },
    MINIGAMES_TITLE: "Minijuegos",
    MINIGAMES: {
      TICTACTOE: "Tres en raya",
      STARHUNTER: "Recoge los objectos que van cayendo",
    },
    KEYBINDS_TITLE: "Atajos de teclado",
    KEYBINDS: {
      TAB: "Pegar el comando sugerido",
      CTRL_L: "Limpiar la pantalla",
      ARROWS: "Acceder al historial de comandos",
      CTRL_C: "Cancelar la linea actual y saltar a la siguiente",
    },
  },
}
const LANG = getLang(LOCALES)
// prettier-ignore
export const LOCALE_help = [
  String.raw`

   __    __  ________  __        _______  
  |  \  |  \|        \|  \      |       \ 
  | ██  | ██| ████████| ██      | ███████\
  | ██__| ██| ██__    | ██      | ██__/ ██
  | ██    ██| ██  \   | ██      | ██    ██
  | ████████| █████   | ██      | ███████ 
  | ██  | ██| ██_____ | ██_____ | ██      
  | ██  | ██| ██     \| ██     \| ██      
   \██   \██ \████████ \████████ \██      
                                                                     
  `,
  `
  ╞═════════════════════════╡ ${LANG.COMMANDS_TITLE} ╞═════════════════════════╡
  `,
  <>
    {"\t>"} help <Color hex="666666">~ {LANG.COMMANDS.HELP}</Color>{"\n"}
    {"\t>"} about <Color hex="666666">~ {LANG.COMMANDS.ABOUT}</Color>{"\n"}
    {"\t>"} skills <Color hex="666666">~ {LANG.COMMANDS.SKILLS}</Color>{"\n"}
    {"\t>"} social <Color hex="666666">~ {LANG.COMMANDS.SOCIAL}</Color>{"\n"}
    {"\t>"} projects <Color hex="666666">~ {LANG.COMMANDS.PROJECTS}</Color>{"\n"}
    {"\t>"} superheroes <Color hex="666666">~ {LANG.COMMANDS.SUPERHEROES}</Color>{"\n"}
    {"\t>"} github <Color hex="666666">~ {LANG.COMMANDS.GITHUB}</Color>{"\n"}
    {"\t>"} shutdown <Color hex="666666">~ {LANG.COMMANDS.SHUTDOWN}</Color>{"\n"}
  </>,
  `

  ╞═════════════════════════╡ ${LANG.MINIGAMES_TITLE} ╞═════════════════════════╡
  `,
  <>
    {"\t>"} run TicTacToe <Color hex="666666">~ {LANG.MINIGAMES.TICTACTOE}</Color>{"\n"}
    {"\t>"} run StarHunter <Color hex="666666">~ {LANG.MINIGAMES.STARHUNTER}</Color>{"\n"}
  </>,
  `
  
  ╞═════════════════════════╡ ${LANG.KEYBINDS_TITLE} ╞═════════════════════════╡
  `,
  <>{"\t- "}<Color hex="ffad42">{"<TAB>"}</Color><Color hex="aaaaaa"> ~ {LANG.KEYBINDS.TAB}</Color></>,
  <>{"\t- "}<Color hex="ffad42">{"<CTRL+L>"}</Color><Color hex="aaaaaa"> ~ {LANG.KEYBINDS.CTRL_L}</Color></>,
  <>{"\t- "}<Color hex="ffad42">{"<UP_ARROW|DOWN_ARROW>"}</Color><Color hex="aaaaaa"> ~ {LANG.KEYBINDS.ARROWS}</Color></>,
  <>{"\t- "}<Color hex="ffad42">{"<CTRL+C>"}</Color><Color hex="aaaaaa"> ~ {LANG.KEYBINDS.CTRL_C}</Color></>,
  "",
  "",
]
