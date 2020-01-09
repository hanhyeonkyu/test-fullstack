import React from 'react'
import { Link } from "react-router-dom";
import { DebounceButton } from '../../component/Buttons/Buttons'
import { Global } from '../../utils/Global'
import { ReactUtil } from '../../utils/ReactUtil'
import './FuncTest.scss'

class FuncTest extends React.Component {
    public constructor(props: React.Props<any>) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <div className="CalGo">
                <p>func test what you want to do</p>
                <p>Global key : {Global.key}</p>
                <DebounceButton
                    variant="contained"
                    onClick={() => {
                        Global.key += 1
                        ReactUtil.refresh(this)
                    }}>
                    plus Global key
                    </DebounceButton>
                <Link to="/calsection">
                    <DebounceButton variant="contained" onClick={() => { }}> go back </DebounceButton>
                </Link>
            </div>
        );
    }
}

export default FuncTest;
