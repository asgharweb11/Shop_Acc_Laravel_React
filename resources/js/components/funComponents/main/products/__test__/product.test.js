import React, { createElement } from "react";
import { render, screen , cleanup} from "@testing-library/react"
import {BrowserRouter as Router , Switch} from "react-router-dom"
// ------------
import Product from "../product";
// --------- data
import {special} from "../../../data";

afterEach(cleanup);
test('get data-testid / page : main/products/product.js ', () => {
    const component = render(
        <Router>
            <Switch>
                <Product data={special[0]}/>
            </Switch>
        </Router>,
    );
    expect(component.getByTestId("title").textContent).toEqual(special[0].title)
})