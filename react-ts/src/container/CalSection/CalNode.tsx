import React from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import { ReactUtil } from '../../utils/ReactUtil'
import { DebounceButton } from '../../component/Buttons/Buttons'
import './CalGo.scss'

class CalNode extends React.Component {
    public constructor(props: React.Props<any>) {
        super(props);
    }
    private test: string = "";
    public render(): JSX.Element {
        return (
            <div className="CalNode">
                <p>calculation by node</p>
                <DebounceButton variant="contained" onClick={() => {
                    axios.get('/api/cal/arraytest')
                        .then((res) => {
                            this.test = JSON.stringify(res.data.time)
                            ReactUtil.refresh(this)
                        })
                }}> node cal </DebounceButton>
                <p>{this.test}</p>
                <Link to="/calsection">
                    <DebounceButton variant="contained" onClick={() => { }}> go back </DebounceButton>
                </Link>
            </div>
        );
    }
}

export default CalNode;
