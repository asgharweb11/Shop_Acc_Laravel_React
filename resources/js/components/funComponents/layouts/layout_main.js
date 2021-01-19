import React from 'react'
import Header from "./main/header";


export default function layout_main({children}) {
    // console.log(children)
    return (
        <React.Fragment>
            <div className="content">
                <Header />
                <div>{children}</div>
                <footer>Footer</footer>
            </div>
        </React.Fragment>
    )
}
