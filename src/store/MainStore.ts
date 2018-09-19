import { observable, action } from 'mobx';

export default class MainStore {
	@observable displayValue = '0';
	@observable result = 0;
	@observable currentOperation?: string = null;

	isOperationChanged: boolean = false;

	@action addDisplayValue(value: number) {
		let newValue = this.displayValue === '0'
			? value.toString()
			: `${this.displayValue}${value}`;

		if (this.isOperationChanged) {
			newValue = value.toString();
			this.isOperationChanged = false;
		}

		this.displayValue = newValue;
	}

	@action clear() {
		this.displayValue = '0';
		this.currentOperation = null;
	}

	@action summonClowns() {
		this.displayValue = ':takoy_clown:'
	}

	@action setCurrentOperation(value?: string) {
		this.currentOperation = value;
		this.isOperationChanged = true;
		this.result = Number(this.displayValue);
	}

	@action calculate() {
		let calculatedResult;

		switch (this.currentOperation) {
			case '÷':
				calculatedResult = this.result / Number(this.displayValue);
				break;
			case 'x':
				calculatedResult = this.result * Number(this.displayValue);
				break;
			case '-':
				calculatedResult = this.result - Number(this.displayValue);
				break;
			case '+':
				calculatedResult = this.result + Number(this.displayValue);
				break;
			default:
				calculatedResult = this.result;
		}

		this.displayValue = calculatedResult.toString();
		this.result = calculatedResult;
		this.currentOperation = null;
		this.isOperationChanged = true;
	}
}