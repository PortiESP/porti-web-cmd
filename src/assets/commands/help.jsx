import Color from "../../components/terminal_web/components/color/color"

// prettier-ignore
const help = [
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
  ╞═════════════════════════╡ Commands ╞═════════════════════════╡
  `,
  <>
    {"\t>"} help <Color hex="666666">~ Print this information screen</Color>{"\n"}
    {"\t>"} about <Color hex="666666">~ A bit more information about myself</Color>{"\n"}
    {"\t>"} skills <Color hex="666666">~ Tree of some of my most relevant skills</Color>{"\n"}
    {"\t>"} social <Color hex="666666">~ Links to my social media</Color>{"\n"}
    {"\t>"} projects <Color hex="666666">~ Some personal projects I've made</Color>{"\n"}
    {"\t>"} superheroes <Color hex="666666">~ Awesome online resources and content creators</Color>
  </>,
  `
  ╞═════════════════════════╡ Keybinds ╞═════════════════════════╡
  `,
  <>{"\t- "}<Color hex="ffad42">{"<TAB>"}</Color><Color hex="aaaaaa"> ~ Paste suggested command</Color></>,
  <>{"\t- "}<Color hex="ffad42">{"<CTRL+L>"}</Color><Color hex="aaaaaa"> ~ Clear Screen</Color></>,
  <>{"\t- "}<Color hex="ffad42">{"<UP_ARROW|DOWN_ARROW>"}</Color><Color hex="aaaaaa"> ~ Rotate between commands history and shortcuts</Color></>,
  <>{"\t- "}<Color hex="ffad42">{"<CTRL+C>"}</Color><Color hex="aaaaaa"> ~ Cancel the current prompt line</Color></>,
  "",
  "",
]

export default help
