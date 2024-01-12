import { useEffect } from "react"
import setup from "./scripts/setup.js"
import "./styles/index.css"

export default function MipsDecompiler() {

  useEffect(() => {
    setup()
  }, [])

  return (
    <>
      <main>
        <div className="wrapper">
          <h1>MIPS Instruction disassembler</h1>
          <div>
            <div className="input-group">
              <label htmlFor="instruction-address">Instruction Address ($PC): </label>
              <input type="text" id="instruction-address" name="instruction-address" placeholder="0x1A2B3C4D" autoFocus /> <span className="required">*(required)</span>
            </div>
            <div className="input-group">
              <label htmlFor="instruction-code">Instruction code (big-endian): </label>
              <input type="text" id="instruction-code" name="instruction-code" placeholder="XX-XX-XX-XX" /> <span className="required">*(required)</span>
            </div>
          </div>
          <hr />
          <table>
            <tbody id="table-content"></tbody>
          </table>
          <div id="error-msg"></div>
        </div>
      </main>
      <footer>
        <span className="contribute">
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
