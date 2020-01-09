import * as React from 'react';
import './Selects.scss';
import { Select, MenuItem, SelectProps } from '@material-ui/core';

export class DataSelects extends React.Component<IProps> {
    private empty_text: null | string = this.props.empty_text === undefined ? null : this.props.empty_text;
    private select_name: string = this.props.select_name;
    private select_data: { [key: string]: { [key: string]: string | number }[] } = this.props.select_data;

    public render(): JSX.Element {
        return (
            <Select {...this.props}>
                {this.empty_text && (<MenuItem value=""><em>{this.empty_text}</em></MenuItem>)}
                {this.select_data && this.select_data[this.select_name] && this.select_data[this.select_name].map((data) => {
                    return (<MenuItem key={Object.values(data)[0]} value={Object.values(data)[1]}>{Object.values(data)[0]}</MenuItem>);
                })}
            </Select>
        )
    }
}

export interface IProps extends SelectProps {
    empty_text?: string;
    select_name: string;
    select_data: { [key: string]: { [key: string]: string | number }[] };
}
