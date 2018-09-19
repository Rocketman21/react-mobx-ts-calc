import * as React from 'react'
import { calcButton } from 'src/index.css';
import CalcButton from 'src/types/CalcButton';

interface Props {
	button: CalcButton,
	onClick: Function,
	className?: string
}

export default class Button extends React.Component<Props> {
	handleButtonClick = () => {
		const {button, onClick} = this.props;

		onClick(button.value);
	}

	render() {
		const {button, className} = this.props;

		return (
			<button className={`${calcButton} ${className}`} style={button.style} onClick={this.handleButtonClick}>
				{this.props.button.value}
			</button>
		)
	}
}