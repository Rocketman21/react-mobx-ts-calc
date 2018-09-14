import * as React from 'react'
import { calcButton } from 'src/index.css';
import CalcButton from 'src/types/CalcButton';

interface Props {
	button: CalcButton
}

export default class App extends React.Component<Props> {
	render() {
		return (
			<button className={calcButton} style={this.props.button.style}>
				{this.props.button.value}
			</button>
		)
	}
}