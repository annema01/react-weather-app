import React from "react"
import ReactDOM from "react-dom/client"
import "bootstrap/dist/css/bootstrap.css"
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import "bootstrap-icons/font/bootstrap-icons.css"
import "./styles/index.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
