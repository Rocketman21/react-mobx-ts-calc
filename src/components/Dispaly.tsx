import * as React from 'react';
import { calcDisplay } from 'src/index.css';
import { inject, observer } from 'mobx-react';
import MainStore from 'src/store/MainStore';

const MAX_DISPLAY_STRING_LENGTH = 8;
const INITIAL_DISPLAY_FONT_SIZE = 50;

interface Props {
	MainStore?: MainStore
}

@inject('MainStore')
@observer
export default class Display extends React.Component<Props> {
	render() {
		const displayValue = this.props.MainStore.displayValue;
		const fontSize = displayValue.length < MAX_DISPLAY_STRING_LENGTH
			? INITIAL_DISPLAY_FONT_SIZE
			: INITIAL_DISPLAY_FONT_SIZE * MAX_DISPLAY_STRING_LENGTH / displayValue.length

		return (
			<div className={calcDisplay} style={{fontSize}}>
				{displayValue}
			</div>
		);
	}
}