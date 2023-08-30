import getLang from "../utils/get_lang"

const LANG = getLang({
  en: {
    INTRODUCTION_TITLE: "INTRODUCTION",
    INTRODUCTION: [
      "Greetings user!, Let me introduce myself in a quite fast...",
      "My name is Jaime Portillo, but everyone knows me as Porti ;)",
      "I spend my time learning and developing software",
      "I am not only into Web Development but also in any other topic related to software: Cybersecurity, Low-level Programming, OS Management, Cloud & DBs, ...",
    ],
    WHAT_IS_THIS_TITLE: "WHAT IS THIS?",
    WHAT_IS_THIS: [
      "This project is a terminal-based portfolio, the user will use some predefined commands to help him getting to know me.",
      "The terminal also implements some features such as: Keybinds, command autocompletion or commands history",
      "Take a look to the project code at the ",
    ],
    LETS_START_TITLE: "LETS START!",
    LETS_START: [
      "Type 'help' to print the list of available commands",
      "FOR MOBILE USERS...",
      "You can use the buttons at the bottom-right corner to paste any command, or just tap on the suggestion once it appears on the screen ",
    ],
  },
  es: {
    INTRODUCTION_TITLE: "INTRODUCCIÓN",
    INTRODUCTION: [
      "¡Saludos usuario! Permíteme presentarme de manera rápida...",
      "Mi nombre es Jaime Portillo, pero todos me conocen como Porti ;)",
      "Paso mi tiempo aprendiendo y desarrollando software.",
      "No solo me dedico al desarrollo web, sino también a cualquier otro tema relacionado con el software: ciberseguridad, programación de bajo nivel, \n\t  gestión de sistemas operativos, nubes y bases de datos, ...",
    ],
    WHAT_IS_THIS_TITLE: "¿QUÉ ES ESTO?",
    WHAT_IS_THIS: [
      "Este proyecto es un portafolio basado en terminal. El usuario utilizará algunos comandos predefinidos para conocerme mejor.",
      "La terminal también implementa algunas funciones como atajos de teclado, autocompletado de comandos o historial de comandos.",
      "Echa un vistazo al código del proyecto en el ",
    ],
    LETS_START_TITLE: "EMPECEMOS!",
    LETS_START: [
      "Escribe 'ayuda' para imprimir la lista de comandos disponibles.",
      "PARA USUARIOS DE MOVIL...",
      "Puedes usar los botones en la esquina inferior derecha para pegar cualquier comando o simplemente tocar la sugerencia una vez que aparezca en la pantalla.",
    ],
  },
})

// prettier-ignore
export const LOCALE_introduction = [
  `

  ┌──${'─'.repeat(LANG.INTRODUCTION_TITLE.length)}┐
  │ ${LANG.INTRODUCTION_TITLE} │
  └──${'─'.repeat(LANG.INTRODUCTION_TITLE.length)}┘

      ${LANG.INTRODUCTION[0]}

        - ${LANG.INTRODUCTION[1]}
        - ${LANG.INTRODUCTION[2]}
        - ${LANG.INTRODUCTION[3]}


  ┌──${'─'.repeat(LANG.WHAT_IS_THIS_TITLE.length)}┐
  │ ${LANG.WHAT_IS_THIS_TITLE} │
  └──${'─'.repeat(LANG.WHAT_IS_THIS_TITLE.length)}┘
      
      - ${LANG.WHAT_IS_THIS[0]}
      - ${LANG.WHAT_IS_THIS[1]}`,
  <>{"      - "}{LANG.WHAT_IS_THIS[2]}<a href="https://github.com/PortiESP/porti-web-cmd">Github repo</a></>,
  `

  ┌──${'─'.repeat(LANG.LETS_START_TITLE.length)}┐
  │ ${LANG.LETS_START_TITLE} │
  └──${'─'.repeat(LANG.LETS_START_TITLE.length)}┘

      > ${LANG.LETS_START[0]}

      ${LANG.LETS_START[1]}
      > ${LANG.LETS_START[2]}


`,
]

export default LOCALE_introduction
