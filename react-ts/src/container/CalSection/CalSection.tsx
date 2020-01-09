import React from 'react'

import { Link } from "react-router-dom";

import { DebounceButton } from '../../component/Buttons/Buttons'
import './CalSection.scss'

class CalSection extends React.Component {
    public constructor(props: React.Props<any>) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <div className="CalSection">
                <p>which do you want to use?</p>
                <Link to="/">
                    <DebounceButton variant="contained" onClick={() => { }}> go back </DebounceButton>
                </Link>
                <Link to="/calsection/node">
                    <DebounceButton variant="contained" onClick={() => { }}> cal by node </DebounceButton>
                </Link>
                <Link to="/calsection/functest">
                    <DebounceButton variant="contained" onClick={() => { }}> experience func </DebounceButton>
                </Link>
                <Link to="/calsection/go">
                    <DebounceButton variant="contained" onClick={() => { }}> cal by go </DebounceButton>
                </Link>
            </div>
        );
    }
}

export default CalSection;
