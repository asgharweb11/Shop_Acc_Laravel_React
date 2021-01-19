import React from 'react'

export default function layout_cms({children}) {
    return (
        <div>
            <heder>header Cms</heder>
            <div>{children}</div>
            <footer>Footer</footer>
        </div>
    )
}
