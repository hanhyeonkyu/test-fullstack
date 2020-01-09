import * as React from 'react';
import './Buttons.scss';
import { Button, ButtonProps } from '@material-ui/core';
import { ReactUtil } from '../../utils/ReactUtil';

export class DebounceButton extends React.Component<IProps> {
    public render(): JSX.Element {
        return (
            <Button {...this.props}
                disabled={!this.enabled_}
                onClick={this.handleClick.bind(this)}>
                {this.props.children}
            </Button>
        )
    }

    private async handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> {
        this.enabled_ = false;
        await ReactUtil.refresh(this);

        await this.props.onClick(event);

        this.enabled_ = true;
        await ReactUtil.refresh(this);
    }

    private enabled_: boolean = true;
}

export interface IProps extends Omit<ButtonProps, "disabled" | "onClick"> {
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => (void | Promise<void>);
}
