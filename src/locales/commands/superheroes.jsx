import getLang from "../../utils/get_lang"

const youtube = [
  {
    title: "Live Overflow",
    url: "https://www.youtube.com/@LiveOverflow",
  },
  {
    title: "Pwn Function",
    url: "https://www.youtube.com/@PwnFunction",
  },
  {
    title: "Neso Academy",
    url: "https://www.youtube.com/@nesoacademy",
  },
  {
    title: "The PC Security Channel",
    url: "https://www.youtube.com/@pcsecuritychannel",
  },
  {
    title: "Guided hacking",
    url: "https://www.youtube.com/@GuidedHacking",
  },
  {
    title: "DFIR Science",
    url: "https://www.youtube.com/@DFIRScience",
  },
  {
    title: "Crypto Cat",
    url: "https://www.youtube.com/@_CryptoCat",
  },
  {
    title: "CSE Praticals",
    url: "https://www.youtube.com/@CSEPracticals",
  },
  {
    title: "Malware Analysis For Hedgehogs",
    url: "https://www.youtube.com/@MalwareAnalysisForHedgehogs",
  },
  {
    title: "Fireship",
    url: "https://www.youtube.com/@Fireship",
  },
  {
    title: "Dorian Designs",
    url: "https://www.youtube.com/@DorianDesings",
  },
  {
    title: "s4vitar",
    url: "https://www.youtube.com/@s4vitar",
  },
  {
    title: "Chris Courses",
    url: "https://www.youtube.com/@ChrisCourses",
  },
  {
    title: "3DGreenhorn",
    url: "https://www.youtube.com/@3dgreenhorn",
  },
  {
    title: "Passivestar",
    url: "https://www.youtube.com/@passivestar",
  },
  {
    title: "Blendtuts-ES",
    url: "https://www.youtube.com/@BlendtutsES",
  },
  {
    title: "Tutoriales Kames",
    url: "https://www.youtube.com/@TutorialesKames",
  },
  {
    title: "HackerSploit",
    url: "https://www.youtube.com/@HackerSploit",
  },
  {
    title: "Stephen Chapman",
    url: "https://www.youtube.com/@StephenChapman",
  },
  {
    title: "Branch Education",
    url: "https://www.youtube.com/@BranchEducation",
  },
  {
    title: "DarkSec",
    url: "https://www.youtube.com/@DarkSec",
  },
  {
    title: "Corey Schafer",
    url: "https://www.youtube.com/@coreyms",
  },
  {
    title: "Mastering IT",
    url: "https://www.youtube.com/@MasteringIT",
  },
  {
    title: "Computerphile",
    url: "https://www.youtube.com/@Computerphile",
  },
  {
    title: "Manuel González",
    url: "https://www.youtube.com/@manuelgonzalez1644",
  },
]

const docs = [
  {
    title: "Linux documentation",
    url: "https://linux.die.net/man/",
  },
  {
    title: "Tutorials point",
    url: "https://www.tutorialspoint.com/",
  },
  {
    title: "Developer Mozilla",
    url: "https://developer.mozilla.org/",
  },
  {
    title: "Developer chrome",
    url: "https://developer.chrome.com/",
  },
]

const design = [
  {
    title: "Dev icons",
    description:
      "This page has the logos of the programming languages, IDEs, design tools and basically almost every thing we use as developers daily, icons also have different versions available, no reference needed",
    url: "https://devicon.dev/",
    featured: true,
  },
  {
    title: "Flaticons",
    description: "This site have many icons of many different styles with high quality, attribution is required",
    url: "https://www.flaticon.com/authors/flat_circular/flat/",
  },
  {
    title: "Icons8",
    description: "Another page to download quality icons",
    url: "https://iconos8.es/",
  },
  {
    title: "Google Icons",
    description:
      "All the icons here are open-source (no attribution), we can import the URL or download the svg/png, the downside of this page is that all the icons are plain material design",
    url: "https://fonts.google.com/icons",
  },
  {
    title: "Box icons",
    description: "Another page to find high quality icons",
    url: "https://boxicons.com/",
  },
  {
    title: "Fluent emoji",
    description: "This is a Figma project that has created all the emojis in 4 versions (3D, Color, Flat, B&W)",
    url: "https://www.figma.com/file/X7tvUV8DyUUxuQ2S3WJtNt/Fluent-emoji-%E2%80%94-1-(Community)",
  },
  {
    title: "Get emoji",
    description:
      "This is a page where we can copy web emojis to the clipboard, this page actually refers to emojipedia.com",
    url: "https://getemoji.com/",
  },
  {
    title: "Adobe color",
    description: "This page will generate color palettes based on your preferences",
    url: "https://color.adobe.com/create/color-wheel",
  },
  {
    title: "Color picker",
    description: "Choose colors for your projects",
    url: "https://htmlcolorcodes.com/es/",
  },
  {
    title: "Brand colors",
    description: "This page has the color palette of lots of brands",
    url: "https://brandcolors.net/",
  },
  {
    title: "Transparent textures",
    description:
      "This page have lots of png textures for your backgrounds, every texture can be scaled to create a pattern",
    url: "https://www.transparenttextures.com/",
    featured: true,
  },
  {
    title: "BGJar",
    description:
      "This page generates nice and personalizable backgrounds with blobs and shapes in PNG/SVG, it has also a cool map where we can color any country to create a representative map",
    url: "https://bgjar.com/",
  },
]

const illustrations = [
  {
    title: "Undraw",
    description: "This is a site for SVG illustrations with constant plain design",
    url: "https://undraw.co/illustrations",
  },
  {
    title: "Manypixels",
    description: "A workshop of illustration of many styles",
    url: "https://www.manypixels.co/gallery",
  },
]

const sections = [
  { name: "YouTube", data: youtube },
  { name: "Docs", data: docs },
  { name: "Color & Design", data: design },
  { name: "Illustrations", data: illustrations },
]

const LANG = getLang({
  en: {
    TITLE: [
      "In this section I would like to give a huge shout-out to all the content creators and online resources that",
      "helped me a lot during all of this time <3",
    ],
  },
  es: {
    TITLE: [
      "He creado esta sección para dar crédito a los recursos y creadores de contenido que me han sido muy útiles",
      "y me han ayudado a seguir creciendo y aprendiendo cada día <3",
    ],
  },
})

// prettier-ignore
export const LOCALE_superheroes = [
  String.raw`

    ______   __    __  _______   ________  _______   __    __  ________  _______    ______   ________   ______  
   /      \ |  \  |  \|       \ |        \|       \ |  \  |  \|        \|       \  /      \ |        \ /      \ 
  |  ██████\| ██  | ██| ███████\| ████████| ███████\| ██  | ██| ████████| ███████\|  ██████\| ████████|  ██████\
  | ██___\██| ██  | ██| ██__/ ██| ██__    | ██__| ██| ██__| ██| ██__    | ██__| ██| ██  | ██| ██__    | ██___\██
   \██    \ | ██  | ██| ██    ██| ██  \   | ██    ██| ██    ██| ██  \   | ██    ██| ██  | ██| ██  \    \██    \ 
   _\██████\| ██  | ██| ███████ | █████   | ███████\| ████████| █████   | ███████\| ██  | ██| █████    _\██████\
  |  \__| ██| ██__/ ██| ██      | ██_____ | ██  | ██| ██  | ██| ██_____ | ██  | ██| ██__/ ██| ██_____ |  \__| ██
   \██    ██ \██    ██| ██      | ██     \| ██  | ██| ██  | ██| ██     \| ██  | ██ \██    ██| ██     \ \██    ██
    \██████   \██████  \██       \████████ \██   \██ \██   \██ \████████ \██   \██  \██████  \████████  \██████ 

  ${LANG.TITLE[0]}
  ${LANG.TITLE[1]}
  `,
  ...sections.map(section => ([
    `
      ┌──${'─'.repeat(section.name.length)}┐
      │ ${section.name} │
      └─┬${'─'.repeat(section.name.length)}┘
        │\n`,
    section.data.map((channel,i) => <span key={i}>{" ".repeat(8)}{i !== section.data.length-1 ?"├": "└"}── <a key={i} target="_blank" href={channel.url}>{channel.title}</a>{"\n"}</span>),
    "\n"
  ])),
  ""
]
