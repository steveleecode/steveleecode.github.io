import React from "react"
import Header from "./header"
import {layout} from "../styles/layout.module.css"

export default function Layout({ children }) {
  return (
    <div className={layout}>
        <Header/>
      {children}
    </div>
  )
}