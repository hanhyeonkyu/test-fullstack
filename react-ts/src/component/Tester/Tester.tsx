import * as React from 'react';
import './Tester.scss';
import { ReactUtil } from '../../utils/ReactUtil';
import { CalUtil } from '../../utils/CalUtil';
import { Button } from '@material-ui/core';

export class Tester extends React.Component {

    private excessTest: number = 0;
    private collaterals: { [key: string]: { [key: string]: string | boolean } } = {
        cancer: { name: '암', selected: false },
        brain: { name: '뇌', selected: false },
        heart: { name: '심장', selected: true },
        death: { name: '사망', selected: true },
        hospitalized: { name: '입원', selected: true },
        operated: { name: '수술', selected: true },
        block: { name: '장해', selected: false },
        diagnosis: { name: '진단', selected: false }
    } as const;
    public constructor(props: React.Props<any>) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <div className="test-container">
                <Button color="primary" variant="contained" onClick={this.handlePlus.bind(this)} style={{ padding: '5px', margin: '3px' }}>더하기</Button>
                <Button color="secondary" variant="contained" onClick={this.handleReset.bind(this)} style={{ padding: '5px', margin: '3px' }}>리셋</Button>
                <p>{this.excessTest}</p>
                <p>{CalUtil.arrToStr(['123', '324', '554', '3123', '4234'], '#', ' / ')}</p>
                <p>{CalUtil.dictToKeyArray({ ks: 'ksmark', fe: 'steel', plus: 'add', minus: 'subtract' })}</p>
                <p>{CalUtil.dictToValueArray({ ks: 'ksmark', fe: 'steel', plus: 'add', minus: 'subtract' })}</p>
                <p>{CalUtil.arrToStr(CalUtil.filterSelectedMakeNameArr(this.collaterals), '#', ' 😀 ')}</p>
            </div>
        )
    }

    private handlePlus(): void {
        this.excessTest += 1;
        ReactUtil.refresh(this);
    }
    private handleReset(): void {
        this.excessTest = 0;
        ReactUtil.refresh(this);
    }
}
