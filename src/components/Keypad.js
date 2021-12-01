// Code Keypad Component Here

import React from 'react'

function Keypad() {
    function renderText() {
        console.log("Entering password...")
    }
    return (
        <input onChange={renderText} type="password" />
    )
}

export default Keypad