import { observable, action } from 'mobx';

export default class MainStore {
	@observable displayValue = '0';

	@action addDisplayValue(value: number) {
		this.displayValue = this.displayValue === '0'
			? value.toString()
			: `${this.displayValue}${value}`;
	}

	@action clear() {
		this.displayValue = '0';
	}

	@action summonClowns() {
		this.displayValue = ':takoy_clown:'
	}
}