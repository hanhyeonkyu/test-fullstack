import React from 'react'
import { Link } from "react-router-dom";
import { DebounceButton } from '../../component/Buttons/Buttons'
import './CalGo.scss'

class CalGo extends React.Component {
    public constructor(props: React.Props<any>) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <div className="CalGo">
                <p>calculation by go</p>
                <Link to="/calsection">
                    <DebounceButton variant="contained" onClick={() => { }}> go back </DebounceButton>
                </Link>
            </div>
        );
    }
}

export default CalGo;
