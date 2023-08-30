import getLang from "../../utils/get_lang"

const LANG = getLang({
  en: {
    TITLE: "Skills Tree",
    CATEGORIES: {
      PROGRAMMING: "Programming",
      DB: "DBs",
      CYBERSECURITY: "Cybersecurity",
      OS_MANAGEMENT: "Operative Systems Management",
      APPS_TOOLS: "Apps & Tools",
      DESIGN_3D: "3D Design",
    },
    KEYWORDS: {
      CONCEPTS: "Concepts",
      OS_S: "OSs",
    },
  },
  es: {
    TITLE: "Árbol de habilidades",
    CATEGORIES: {
      PROGRAMMING: "Programación",
      DB: "BBDD",
      CYBERSECURITY: "Ciberseguridad",
      OS_MANAGEMENT: "Gestión de Sistemas Operativos",
      APPS_TOOLS: "Herramientas y Aplicaciones",
      DESIGN_3D: "Diseño 3D",
    },
    KEYWORDS: {
      CONCEPTS: "Conceptos",
      OS_S: "Sistemas Operativos",
    },
  },
})

export const LOCALE_skills = String.raw`


   ______   __    __  ______  __        __        ______  
  /      \ |  \  /  \|      \|  \      |  \      /      \ 
 |  ██████\| ██ /  ██ \██████| ██      | ██     |  ██████\
 | ██___\██| ██/  ██   | ██  | ██      | ██     | ██___\██
  \██    \ | ██  ██    | ██  | ██      | ██      \██    \ 
  _\██████\| █████\    | ██  | ██      | ██      _\██████\
 |  \__| ██| ██ \██\  _| ██_ | ██_____ | ██_____|  \__| ██
  \██    ██| ██  \██\|   ██ \| ██     \| ██     \\██    ██
   \██████  \██   \██ \██████ \████████ \████████ \██████ 
                                                          

   
  ┌──${"─".repeat(LANG.TITLE.length)}┐
  │ ${LANG.TITLE} │
  └─┬${"─".repeat(LANG.TITLE.length)}┘
    │
    ├── ${LANG.CATEGORIES.PROGRAMMING}
    │   ├── Python
    │   ├── C
    │   ├── HTML
    │   ├── CSS
    │   │   └── SASS
    │   ├── JavaScript
    │   │   ├── Node
    │   │   ├── React
    │   │   │   ├── Next
    │   │   │   ├── React Native
    │   │   │   └── Redux
    │   │   ├── Vue
    │   │   ├── ElectronJS
    │   │   ├── PWA
    │   │   └── d3
    │   ├── Markdown
    │   ├── R
    │   └── Assembly (MIPS)
    ├── ${LANG.CATEGORIES.DB}
    │   ├── Firebase
    │   ├── Redis
    │   └── MySQL
    ├── ${LANG.CATEGORIES.CYBERSECURITY}
    │   ├── ${LANG.KEYWORDS.CONCEPTS}
    │   │   ├── Digital Forensics
    │   │   ├── Cryptography
    │   │   ├── Pentesting
    │   │   ├── Binary Exploitation
    │   │   └── OSINT
    │   └── Tools (some of them)
    │       ├── Nmap
    │       ├── Wireshark
    │       ├── IDA Freeware
    │       ├── Tor
    │       ├── Shodan
    │       ├── Hexeditor
    │       ├── SSH
    │       ├── John & Hashcat
    │       ├── Aircrack-ng
    │       ├── Bettercap
    │       ├── Chisel
    │       ├── gdb & r2
    │       ├── ghidra
    │       ├── hydra
    │       ├── Metasploit
    │       ├── Autopsy
    │       ├── Maltego
    │       └── BurpSuite
    ├── ${LANG.CATEGORIES.OS_MANAGEMENT}
    │   ├── ${LANG.KEYWORDS.OS_S}
    │   │   ├── Linux
    │   │   │   ├── Ubuntu
    │   │   │   ├── Arch
    │   │   │   └── Raspbian (Raspberry PI)
    │   │   └── Windows
    │   │       ├── Batch & Powershell
    │   │       ├── Registers
    │   │       └── SysInternals
    │   └── ${LANG.KEYWORDS.CONCEPTS}
    │       ├── Scheduled tasks
    │       ├── Partitions Management
    │       ├── Shell
    │       └── Forensics
    ├── ${LANG.CATEGORIES.APPS_TOOLS}
    │   ├── Figma
    │   ├── Git
    │   ├── Docker
    │   ├── Blender
    │   ├── Notion
    │   ├── Chrome Dev Tools
    │   └── Google Analytics
    ├── ${LANG.CATEGORIES.DESIGN_3D}
    │   └── Blender
    └── Hardware
        ├── Arduino
        ├── Raspberry PI
        └── Flipper Zero
  `
