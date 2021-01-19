import React from 'react';
import "../../../../../sass/main/products.scss";
// -----------------
import Product from './product';
import AllProducts from './allProducts';
import Pagination from "./pagination";
// -----------------
import {special} from "../../data";

export default function home() {
    return (
        <React.Fragment>
            <div className="cards-special">
                <div className="content-cards">
                    <div className="container">
                        <p className="h3 mb-5 text-light" data-testid="special">اکانت های ویژه</p>
                        <div className="row">
                            {
                                special.map((item , index) => {
                                    return <Product data={item} key={index}/>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            {/* نمایش همه محصولات */}
            <AllProducts />

            {/* نمایش صفحه بندی */}
            <Pagination />
        </React.Fragment>
        
    )
}
