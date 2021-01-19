import React from 'react'
import {products} from "../../data";
import Product from "./product";

export default function allProducts() {
    return (
        <div className="allProducts">
            <div className="content">
                <div className="container">
                    <div className="line"></div>
                    <div className="row">
                        {
                            products.map((item , index) => {
                                return <Product data={item} key={index} />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
