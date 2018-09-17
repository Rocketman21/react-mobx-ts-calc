import * as React from 'react'
import { calcContainer, flex } from 'src/index.css';
import Display from 'src/components/Dispaly';
import NumPad from 'src/components/NumPad';
import FunctionalButtons from 'src/components/FunctionalButtons';

export default class Calculator extends React.Component {
	render() {
		return (
			<div className={calcContainer}>
				<Display />
				<div className={flex}>
					<NumPad />
					<FunctionalButtons />
				</div>
			</div>
		)
	}
}