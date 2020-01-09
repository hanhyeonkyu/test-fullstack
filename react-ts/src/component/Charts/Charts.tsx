import * as React from 'react';
import './Charts.scss';
import { ReactUtil } from '../../utils/ReactUtil';
import {
    XYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    VerticalBarSeries,
    HorizontalBarSeries,
    RadialChart
} from 'react-vis';

export class Charts extends React.Component<IProps> { }

export class StackedVerticalBar extends Charts {
    private isVertical: boolean = true;
    public render(): JSX.Element {
        const BarSeries: any = this.isVertical ? VerticalBarSeries : HorizontalBarSeries;
        return (
            <div>
                <button
                    onClick={() => {
                        this.isVertical = !this.isVertical;
                        ReactUtil.refresh(this);
                    }}
                    style={{ backgroundColor: '#fff' }} >toggle</button>
                <XYPlot width={300} height={300} stackBy={this.isVertical ? "y" : "x"}>
                    <VerticalGridLines />
                    <HorizontalGridLines />
                    <XAxis />
                    <YAxis />
                    {this.isVertical ? <BarSeries data={[{ x: 2, y: 10 }, { x: 4, y: 5 }, { x: 5, y: 15 }]} /> : <BarSeries data={[{ y: 2, x: 10 }, { y: 4, x: 5 }, { y: 5, x: 15 }]} />}
                    {this.isVertical ? <BarSeries data={[{ x: 2, y: 12 }, { x: 4, y: 2 }, { x: 5, y: 11 }]} /> : <BarSeries data={[{ y: 2, x: 12 }, { y: 4, x: 2 }, { y: 5, x: 11 }]} />}
                </XYPlot>
            </div>
        )
    }
}

export class Radial extends Charts {

    private myData: { [key: string]: number }[] = [{ angle: 1 }, { angle: 3 }, { angle: 2 }];

    public render(): JSX.Element {
        return (
            <RadialChart
                data={this.myData}
                width={250}
                height={250} />

        )
    }
}

export interface IProps {
}
