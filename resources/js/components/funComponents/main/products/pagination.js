import React from 'react';
import {Link} from "react-router-dom";

export default function pagination() {
    return (
        <div className="btnpage mt-5">
            <div className="content">
                <div className="container d-flex flex-row justify-content-center align-items-center">
                    <ul className="list-inlines m-0 p-0">
                        <li className="list"><Link to="#" className="link" href="#">قبلی</Link></li>
                        <li className="list"><Link to="#" className="link" href="#">1</Link></li>
                        <li className="list"><Link to="#" className="link" href="#">2</Link></li>
                        <li className="list"><Link to="#" className="link" href="#">3</Link></li>
                        <li className="list"><Link to="#" className="link" href="#">بعدی</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
