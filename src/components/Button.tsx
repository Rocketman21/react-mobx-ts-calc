import * as React from 'react'
import { calcButton } from 'src/index.css';
import CalcButton from 'src/types/CalcButton';

interface Props {
	button: CalcButton,
	onClick: Function,
}

export default class Button extends React.Component<Props> {
	handleButtonClick = () => {
		const {button, onClick} = this.props;

		onClick(button.value);
	}

	render() {
		return (
			<button className={calcButton} style={this.props.button.style} onClick={this.handleButtonClick}>
				{this.props.button.value}
			</button>
		)
	}
}