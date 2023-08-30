export default function getLang(locales) {
  // Check if locales are provided
  if (!locales) return undefined
  // Check if the selected language is available
  if (locales[localStorage.getItem("lang")]) return locales[localStorage.getItem("lang")]
  // Check if the browser language is available
  if (locales[navigator.language]) return locales[navigator.language]
  // Return english by default
  return locales["en"]
}
