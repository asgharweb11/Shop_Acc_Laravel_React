import React from "react";
import {BrowserRouter as Router , Switch , Route , Link} from "react-router-dom"
// ------ Layouts --------
import LayoutMain from "./layouts/layout_main";
import LayoutPanel from "./layouts/layout_panel";
import LayoutCms from "./layouts/layout_cms";
// ------ Pages Main -----------
import Home from "./main/home"
import Products from "./main/products";
// ----------- Pages Panel --------
import HomePanel from "./panel/home";

const App = (props) => {
    
    
    return (
        <React.Fragment>
            <Router>
                <Switch>
                    <AppRoute path="/" exact component={Home} layout={LayoutMain} />
                    <AppRoute path="/products" exact component={Products} layout={LayoutMain} />
                    <AppRoute path="/panel" component={HomePanel} layout={LayoutPanel} />
                </Switch>
            </Router>
        </React.Fragment>
    );
}


const AppRoute = ({component:Component,layout:Layout,...rest}) => {
    return (
        <Route {...rest} render={props => {
            return (<Layout><Component {...props} /></Layout>)
        }} />
    );
}

export default App;