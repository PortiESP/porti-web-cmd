import getLang from "../../utils/get_lang"

const LANG = getLang({
  en: {
    TITLE: "Most of the my projects are uploaded to my github page",
    PROJECTS: {
      MARKUP_WIDGETS: "React UI Components",
      NOTION_2_OBSIDIAN: "Graphical tool for converting",
      REACT_TERMINAL_API: "API to use a terminal using React fetch requests",
    },
  },
  es: {
    TITLE: "Todos los proyectos están subidos a mi Github",
    PROJECTS: {
      MARKUP_WIDGETS: "Librería de componentes UI para React",
      NOTION_2_OBSIDIAN: "Herramienta con interfaz gráfica de conversión de Notion a Obsidian",
      REACT_TERMINAL_API: "API para usar una terminal en React basada en llamadas 'fetch'",
    },
  },
})

// prettier-ignore
export const LOCALE_projects = [
  String.raw`

   _______   _______    ______      _____  ________   ______  ________   ______  
  |       \ |       \  /      \    |     \|        \ /      \|        \ /      \ 
  | ███████\| ███████\|  ██████\    \█████| ████████|  ██████\\████████|  ██████\
  | ██__/ ██| ██__| ██| ██  | ██      | ██| ██__    | ██   \██  | ██   | ██___\██
  | ██    ██| ██    ██| ██  | ██ __   | ██| ██  \   | ██        | ██    \██    \ 
  | ███████ | ███████\| ██  | ██|  \  | ██| █████   | ██   __   | ██    _\██████\
  | ██      | ██  | ██| ██__/ ██| ██__| ██| ██_____ | ██__/  \  | ██   |  \__| ██
  | ██      | ██  | ██ \██    ██ \██    ██| ██     \ \██    ██  | ██    \██    ██
   \██       \██   \██  \██████   \██████  \████████  \██████    \██     \██████ 
                                                                                 
                                                                                 
  `,
  `\t${LANG.TITLE}`,
  "",
  <>{"\t"}<a href="https://github.com/PortiESP/MarkupWidgets">MarkupWidgets</a> -------- {LANG.PROJECTS.MARKUP_WIDGETS}</>,
  <>{"\t"}<a href="https://github.com/PortiESP/Notion2Obsidian">Notion2Obsidian</a> ------ {LANG.PROJECTS.NOTION_2_OBSIDIAN}</>,
  <>{"\t"}<a href="https://github.com/PortiESP/react-terminal-api">React Terminal API</a> --- {LANG.PROJECTS.REACT_TERMINAL_API}</>,
  "\n",
  "\n",
]
