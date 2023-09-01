import React, { useState } from 'react'


const TextBox = () => {

    const [msg, setMsg] = useState("")
    const [visibleP, setVisibleP] = useState(false)
    const [visibleTA, setVisibleTA] = useState(true)

    const handleMsgChange = (e) => {
        setMsg(e.target.value)
        console.log(e.target.value)
    }

    const handleGainFocusTA = (e) => {
        setVisibleP(false)
    }

    const handleBlur = (e) => {
        setVisibleP(true)
    }

    const handleCompFocus = (e) => {
        setVisibleTA(true)
    }

    return (
        <div onFocus={handleCompFocus} tabindex="{0}">
            <div>
                <textarea
                    id="message"
                    name="message"
                    value={visibleTA && msg}
                    onChange={handleMsgChange}
                    onFocus={handleGainFocusTA}
                    onBlur={handleBlur}
                    style={{ width: "100%" }}
                />
            </div>
            <p>
                {visibleP && msg}
            </p>
        </div>
    )
}

export default TextBox
