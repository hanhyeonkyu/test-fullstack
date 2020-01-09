import React from 'react'
import { Link } from "react-router-dom";
import { DebounceButton } from '../../component/Buttons/Buttons'
import { Global } from '../../utils/Global'
import './LandingPage.scss'

class LandingPage extends React.Component {
    public constructor(props: React.Props<any>) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <div className="LandingPage">
                <p>Hello! this is Landing page</p>
                <p>Global key : {Global.key}</p>
                <Link to="/calsection">
                    <DebounceButton variant="contained" onClick={() => { }}> Go to Menu </DebounceButton>
                </Link>
            </div>
        );
    }
}

export default LandingPage;
