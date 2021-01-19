import React from "react";
import {BrowserRouter as Router , Switch} from "react-router-dom"
import {render , cleanup} from "@testing-library/react";
import Index from "../index";

afterEach(cleanup);
it("get data-testid : page main/product/index.js " , () => {
    const component = render(
    <Router>
        <Switch>
            <Index />
        </Switch>
    </Router>,
    )
    expect(component.getByTestId("special").textContent).toEqual("اکانت های ویژه");
})