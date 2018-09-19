import * as React from 'react'
import Button from 'src/components/Button';
import { calcFunctionalButtons, calcCurrentOperation } from 'src/index.css';
import CalcButton from 'src/types/CalcButton';
import { inject, observer } from 'mobx-react';
import MainStore from 'src/store/MainStore';

interface Props {
	MainStore?: MainStore
}

@inject('MainStore')
@observer
export default class FunctionalButtons extends React.Component<Props> {
	static borderLeft = {borderLeft: '1px solid'}
	static buttons: CalcButton[] = [
		{value: '÷', style: FunctionalButtons.borderLeft},
		{value: 'x', style: FunctionalButtons.borderLeft},
		{value: '-', style: FunctionalButtons.borderLeft},
		{value: '+', style: FunctionalButtons.borderLeft},
	]
	static calculateButton: CalcButton = {
		value: '=',
		style: {...FunctionalButtons.borderLeft, borderBottom: 'none'}
	}

	handleButtonClick = (value: string) => {
		this.props.MainStore.setCurrentOperation(value)
	}

	handleCalculateClick = (value: string) => {
		this.props.MainStore.calculate()
	}

	render() {
		const {buttons, calculateButton} = this.constructor as typeof FunctionalButtons;
		const {currentOperation} = this.props.MainStore;

		return (
			<div className={calcFunctionalButtons}>
				{buttons.map((button) => (
					<Button
						button={button}
						className={currentOperation === button.value && calcCurrentOperation}
						onClick={this.handleButtonClick}
					/>)
				)}
				<Button button={calculateButton} onClick={this.handleCalculateClick} />
			</div>
		)
	}
}