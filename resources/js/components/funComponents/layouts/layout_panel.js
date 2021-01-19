import React from 'react'

export default function layout_panel({children}) {
    return (
        <div>
            <heder>header Panle</heder>
            <div>{children}</div>
            <footer>Footer</footer>
        </div>
    )
}
