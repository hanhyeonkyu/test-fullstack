import React from 'react';
import * as ReactDOM from "react-dom";

export class ReactUtil {
    public static refresh<Component extends React.Component>(component: Component): Promise<void> {
        return new Promise(resolve => {
            component.setState({}, resolve)
        })
    }
    public static render(element: JSX.Element, container: HTMLElement): Promise<void> {
        return new Promise(resolve => {
            ReactDOM.render(element, container, resolve);
        })
    }
}
