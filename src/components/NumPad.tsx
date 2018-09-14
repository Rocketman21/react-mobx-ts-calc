import * as React from 'react'
import Button from 'src/components/Button';
import { calcNumpad } from 'src/index.css';
import CalcButton from 'src/types/CalcButton';

export default class App extends React.Component {
	static borderRight = {borderRight: '1px solid'}
	static borderLeft = {borderLeft: '1px solid'}

	render() {
		const {borderRight, borderLeft} = this.constructor as typeof App;
		const buttons: CalcButton[] = [
			{value: 1, style: borderRight}, {value: 2}, {value: 3, style: borderLeft},
			{value: 4, style: borderRight}, {value: 5}, {value: 6, style: borderLeft},
			{value: 7, style: borderRight}, {value: 8}, {value: 9, style: borderLeft},
		]

		return (
			<div className={calcNumpad}>
				{buttons.map((button) => (
					<Button button={button} />)
				)}
			</div>
		)
	}
}