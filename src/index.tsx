import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {Provider} from 'mobx-react';
// import store from 'src/store';
import App from 'src/components/App';
import {enableLogging} from 'mobx-logger';

import './index.css';

enableLogging({
	predicate: () => process.env.NODE_ENV === 'development',
	action: true,
});

ReactDOM.render(
	<Provider>
		<App />
	</Provider>,
	document.getElementById('app') as HTMLElement,
);
