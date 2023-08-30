import getLang from "../../utils/get_lang"

const LOCALES = {
  en: {
    SECTIONS: [
      {
        TITLE: "Me",
        BODY: [
          "As I have mentioned before, my name is Jaime Portillo, but I am mostly known as Porti.",
          "I am an independent software developer, at my 22 years old and I have 4 years of experience in developing software",
        ],
      },
      {
        TITLE: "Little story",
        BODY: [
          "My first steps in the software development path were back in 2019 before quarantine, ",
          "when after one of my teachers noticed that I was interested in the BATCH terminal recommended me to ",
          "learn Python and thats what I did.",
        ],
      },
      {
        TITLE: "The beginning",
        BODY: [
          "The quarantine was such an opportunity for me to focus 100% in the new skills I was about to learn with all the whole world that",
          "programming has, for the next 6 months I was completely focused in learning everything related to programming with Python, until",
          "at some point I found myself deeply involved in many other fields I was looking forward to explore.",
        ],
      },
      {
        TITLE: "Dive deep",
        BODY: [
          "Since then, I expanded my scope to multiple other topics, one of those was Cybersecurity with the help of controlled environments provided",
          "by platforms like TryHackMe or HackTheBox but also some other challenges. Along this time I also started to get quite into Operative Systems,",
          "since it is almost a requirement needed to really get into cybersecurity. The following months I started learning the basics of Linux, BASH,",
          "along with some basics about Low-level programming and networking, then headed into the basics of some advanced topics such as ",
          "Forensics, Cryptography, OSINT, Pentesting, ...",
        ],
      },
      {
        TITLE: "Superheroes",
        BODY: [
          "All of this stuff I have learned wouldn't be possible without all of the amazing videos and posts public in the internet. It is amazing all the things you can",
          "learn from a video on YouTube of some random guy that just decided to create videos for free so anyone can learn complex topics the easiest.",
        ],
      },
    ],
    TIP: '[i] You may want to use the "skills" command next',
  },
  es: {
    SECTIONS: [
      {
        TITLE: "Yo",
        BODY: [
          "Como he mencionado antes, soy Jaime Portillo pero todos me conocen como Porti",
          "Soy desarrollador de software independiente, a mis 22 años llevo a día de hoy 4 años dentro del mundo del software",
        ],
      },
      {
        TITLE: "Pequeña anécdota",
        BODY: [
          "Mis primeros pasos en el mundo del desarrollo de software fueron sobre 2019, antes de la cuarentena, ",
          "cuando después de que uno de mis profesores notó que yo estaba interesado en la terminal BATCH me recomendó",
          "aprender Python y eso es lo que hice.",
        ],
      },
      {
        TITLE: "El principio",
        BODY: [
          "La cuarentena fue una gran oportunidad para mí de concentrarme al 100% en las nuevas habilidades que estaba a punto de aprender con todo el mundo",
          "de la programación, durante los siguientes 6 meses estuve completamente enfocado en aprender todo lo relacionado con la programación con Python, hasta",
          "que de un momento a otro me encontré inmerso en muchos otros campos que estaba deseando explorar.",
        ],
      },
      {
        TITLE: "Adentrándome más",
        BODY: [
          "Desde entonces, he ampliado mi alcance a otros múltiples temas, uno de ellos fue la ciberseguridad con la ayuda de entornos controlados proporcionados",
          "por plataformas como TryHackMe o HackTheBox, pero también algunos otros desafíos. A lo largo de este tiempo, también comencé a adentrarme bastante en los sistemas operativos,",
          "ya que es casi un requisito indispensable para realmente entrar en la ciberseguridad. En los meses siguientes también comencé a aprender los conceptos básicos de Linux, BASH,",
          "junto con algunos conceptos básicos sobre programación de bajo nivel y redes, luego me adentré en los conceptos básicos de algunos temas avanzados como",
          "Forense, Criptografía, OSINT, Pentesting, ...",
        ],
      },
      {
        TITLE: "Superheroes",
        BODY: [
          "Todo esto que he aprendido no sería posible sin todos los videos y publicaciones increíbles disponibles en Internet. Es sorprendente todo lo que puedes aprender de un video en YouTube",
          "de un canal al azar que simplemente decidió crear videos de forma gratuita para que cualquiera pueda aprender los temas más complejos de la manera más sencilla.",
        ],
      },
    ],
    TIP: '[i] Puedes probar el comando "skills" para continuar',
  },
}
const LANG = getLang(LOCALES)

export const LOCALE_about = String.raw`

      ______   _______    ______   __    __  ________ 
     /      \ |       \  /      \ |  \  |  \|        \
    |  ██████\| ███████\|  ██████\| ██  | ██ \████████
    | ██__| ██| ██__/ ██| ██  | ██| ██  | ██   | ██   
    | ██    ██| ██    ██| ██  | ██| ██  | ██   | ██   
    | ████████| ███████\| ██  | ██| ██  | ██   | ██   
    | ██  | ██| ██__/ ██| ██__/ ██| ██__/ ██   | ██   
    | ██  | ██| ██    ██ \██    ██ \██    ██   | ██   
     \██   \██ \███████   \██████   \██████     \██   
                                                   


    ╔═══╡ ${LANG.SECTIONS[0].TITLE}
    ║ 
    ║  ${LANG.SECTIONS[0].BODY[0]}
    ║  ${LANG.SECTIONS[0].BODY[1]}
    ║ 
    ║ 
    ╠═══╡ ${LANG.SECTIONS[1].TITLE}
    ║ 
    ║  ${LANG.SECTIONS[1].BODY[0]}
    ║  ${LANG.SECTIONS[1].BODY[1]}
    ║  ${LANG.SECTIONS[1].BODY[2]}
    ║ 
    ║ 
    ╠═══╡ ${LANG.SECTIONS[2].TITLE}
    ║ 
    ║  ${LANG.SECTIONS[2].BODY[0]}
    ║  ${LANG.SECTIONS[2].BODY[1]}
    ║  ${LANG.SECTIONS[2].BODY[2]}
    ║ 
    ║ 
    ╠═══╡ ${LANG.SECTIONS[3].TITLE}
    ║ 
    ║  ${LANG.SECTIONS[3].BODY[0]}
    ║  ${LANG.SECTIONS[3].BODY[1]}
    ║  ${LANG.SECTIONS[3].BODY[2]}
    ║  ${LANG.SECTIONS[3].BODY[3]}
    ║  ${LANG.SECTIONS[3].BODY[4]}
    ║ 
    ║ 
    ╠═══╡ ${LANG.SECTIONS[4].TITLE}
    ║ 
    ║  ${LANG.SECTIONS[4].BODY[0]}
    ║  ${LANG.SECTIONS[4].BODY[1]}
    ║ 
    ╨

    I use Arch by the way ;)

    ${LANG.TIP}

  `
