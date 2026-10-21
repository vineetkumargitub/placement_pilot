import React from "react"
import "./loader.scss"

const Loader = ({ text = "Loading..." }) => {
    return (
        <main className="loader-screen">
            <div className="loader-box">
                <div className="loader-spinner" />
                <p className="loader-text">{text}</p>
            </div>
        </main>
    )
}

export default Loader