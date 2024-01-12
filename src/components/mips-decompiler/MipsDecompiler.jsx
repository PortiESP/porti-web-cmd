import { useEffect } from "react"
import setup from "./scripts/setup.js"
import scss from "./styles/mips_decompiler.module.scss"

export default function MipsDecompiler() {

  useEffect(() => {
    setup()
  }, [])

  return (
    <>
      <main className={scss.main}>
        <div className={scss.wrapper}>
          <h1>MIPS Instruction disassembler</h1>
          <div>
            <div className={scss.input_group}>
              <label htmlFor="instruction-address">Instruction Address ($PC): </label>
              <input type="text" id="instruction-address" name="instruction-address" placeholder="0x1A2B3C4D" autoFocus /> <span className={scss.required}>*(required)</span>
            </div>
            <div className={scss.input_group}>
              <label htmlFor="instruction-code">Instruction code (big-endian): </label>
              <input type="text" id="instruction-code" name="instruction-code" placeholder="XX-XX-XX-XX" /> <span className={scss.required}>*(required)</span>
            </div>
          </div>
          <hr />
          <table>
            <tbody id="table-content"></tbody>
          </table>
          <div id="error-msg"></div>
        </div>
      </main>

      <footer className={scss.footer}>
        <span className={scss.contribute}>
          Contribute to this project in{" "}
          <a target="_blank" href="https://github.com/PortiESP/mips-disassembler-online">
            Github
          </a>{" "}
          @{" "}
          <a target="_blank" href="https://github.com/PortiESP">
            PortiESP
          </a>
        </span>
      </footer>
    </>
  )
}
