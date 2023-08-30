export default function useDetectedLang() {
  return localStorage.getItem("lang") || navigator.language
}
