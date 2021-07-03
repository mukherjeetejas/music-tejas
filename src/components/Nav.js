import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMusic } from "@fortawesome/free-solid-svg-icons"

const Nav = ({libraryStatus, setLibraryStatus}) => {
    return (

        <nav>
            <a target="_blank" href="https://github.com/mukherjeetejas"><h1>JAZZ</h1></a>
            <button onClick = {() => setLibraryStatus(!libraryStatus)}>
                Library 
                <FontAwesomeIcon icon={faMusic}/>
            </button>
        </nav>
    )
}

export default Nav