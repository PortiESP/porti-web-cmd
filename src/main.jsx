import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./global.css"
import MipsDecompiler from "./pages/mips-decompiler/MipsDecompiler.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/mips-decompiler",
    element: <MipsDecompiler />,
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
