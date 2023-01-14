import React, { } from "react"

interface DisclaimerProps {
    icon: string,
    words: string
}

const Disclaimer = ({icon, words}:DisclaimerProps) => {
    return (
        <p className='disclaimer'>
            <i className={icon}></i> {words}
        </p>
    )
}

export { Disclaimer }