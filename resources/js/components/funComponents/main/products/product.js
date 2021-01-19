import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingBag} from "@fortawesome/free-solid-svg-icons"


export default function products({data}) {
    // console.log(data)
    return (
        <div className="col-sm-10 col-md-6 col-lg-4 mt-3 mb-3">
            <div className="card p-2">
                <div className="card-topic d-flex flex-row justify-content-center align-items-center">PC</div>
                <img src="images/main/products/auction-1.jpg" className="card-img-top" alt="بازی فورت نایت" />
                <div className="card-body">
                    <h5 className="card-title m-0" data-testid="title">{data.title}</h5>
                    <div className="card-details p-3">
                        <ul className="m-0 p-0">
                            <li className="p-2 d-column text-dark">
                                <FontAwesomeIcon className="icon ml-3" icon={faShoppingBag} />
                                <span className="text-danger">محصول : </span>
                                <span>{data.type}</span>
                            </li>
                            <li className="p-2 d-column text-dark">
                                <FontAwesomeIcon className="icon ml-3" icon={faShoppingBag} />
                                <span className="text-danger">قیمت : </span>
                                <span>{data.price}</span>
                            </li>
                            <li className="p-2 d-column text-dark">
                                <FontAwesomeIcon className="icon ml-3" icon={faShoppingBag} />
                                <span className="text-danger">پلتفرم : </span>
                                <span>{data.platform}</span>
                            </li>
                        </ul>
                    </div>
                    <div className="card-date mt-3">
                        <p>{data.date}</p>
                    </div>
                    <div className="card-footers mt-3 mb-3 d-flex flex-row justify-content-center align-items-center">
                        <Link className="more h4" to="/">مشاهده</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
