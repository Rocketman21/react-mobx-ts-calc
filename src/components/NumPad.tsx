import * as React from 'react'
import Button from 'src/components/Button';
import { calcNumpad } from 'src/index.css';
import CalcButton from 'src/types/CalcButton';
import { inject } from 'mobx-react';
import MainStore from 'src/store/MainStore';

interface Props {
	MainStore?: MainStore
}

@inject('MainStore')
export default class NumPad extends React.Component<Props> {
	static borderLeftRight = {borderLeft: '1px solid', borderRight: '1px solid'}
	static buttons: CalcButton[] = [
		{value: 7}, {value: 8, style: NumPad.borderLeftRight}, {value: 9},
		{value: 4}, {value: 5, style: NumPad.borderLeftRight}, {value: 6},
		{value: 1}, {value: 2, style: NumPad.borderLeftRight}, {value: 3},
	]
	static cButton: CalcButton = {
		value: 'C',
		style: {width: 63, borderLeft: '1px solid'}
	}
	static zeroButton: CalcButton = {
		value: 0,
		style: {width: 123, justifyContent: 'center'}
	}
	static wtfButton: CalcButton = {
		value: 'wtf',
		style: {width: 186, justifyContent: 'center', border: 'none'}
	}

	handleNumClick = (num: number) => {
		this.props.MainStore.addDisplayValue(num)
	}

	handleClearClick = () => this.props.MainStore.clear()

	handleWTFClick = () => {
		this.props.MainStore.summonClowns()
	}

	render() {
		const {buttons, cButton, zeroButton, wtfButton} = this.constructor as typeof NumPad;

		return (
			<div className={calcNumpad}>
				{buttons.map((button) => (
					<Button button={button} onClick={this.handleNumClick} />)
				)}
				<Button button={zeroButton} onClick={this.handleNumClick} />
				<Button button={cButton} onClick={this.handleClearClick} />
				<Button button={wtfButton} onClick={this.handleWTFClick} />
			</div>
		)
	}
}