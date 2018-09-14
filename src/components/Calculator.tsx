import * as React from 'react'
import { calcContainer } from 'src/index.css';
import Display from 'src/components/Dispaly';
import NumPad from 'src/components/NumPad';

export default class Calculator extends React.Component {
	render() {
		return (
			<div className={calcContainer}>
				<Display />
				<NumPad />
			</div>
		)
	}
}