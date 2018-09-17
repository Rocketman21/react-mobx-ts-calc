import * as React from 'react'
import Button from 'src/components/Button';
import { calcFunctionalButtons } from 'src/index.css';
import CalcButton from 'src/types/CalcButton';

export default class FunctionalButtons extends React.Component {
	static borderLeft = {borderLeft: '1px solid'}
	static buttons: CalcButton[] = [
		{value: '÷', style: FunctionalButtons.borderLeft},
		{value: 'х', style: FunctionalButtons.borderLeft},
		{value: '-', style: FunctionalButtons.borderLeft},
		{value: '+', style: FunctionalButtons.borderLeft},
		{value: '=', style: {...FunctionalButtons.borderLeft, borderBottom: 'none'}},
	]

	render() {
		const {buttons} = this.constructor as typeof FunctionalButtons;

		return (
			<div className={calcFunctionalButtons}>
				{buttons.map((button) => (
					<Button button={button} onClick={() => console.log('Functional button pressed')} />)
				)}
			</div>
		)
	}
}