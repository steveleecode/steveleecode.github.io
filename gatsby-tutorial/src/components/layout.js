import React from "react"
import Header from "./header"

export default function Layout({ children }) {
  return (
    <div style={{ margin: `0 auto`, width: "95%", padding: `2em`, textAlign: "left", }}>
        <Header />
      {children}
    </div>
  )
}