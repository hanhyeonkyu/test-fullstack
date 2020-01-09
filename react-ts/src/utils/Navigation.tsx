import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from '../container/LandingPage/LandingPage'
import CalSection from '../container/CalSection/CalSection'
import CalNode from '../container/CalSection/CalNode'
import CalGo from '../container/CalSection/CalGo'
import FuncTest from '../container/CalSection/FuncTest'

class Navigation extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route exact path={"/"} component={LandingPage} />
                    <Route exact path={"/calsection"} component={CalSection} />
                    <Switch>
                        <Route exact path={"/calsection/node"} component={CalNode} />
                        <Route exact path={"/calsection/functest"} component={FuncTest} />
                        <Route exact path={"/calsection/go"} component={CalGo} />
                    </Switch>
                </Switch>
            </React.Fragment >
        );
    }
}

export default Navigation;