import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store, { persistor } from './store';
import Routing from './Routing';
import { PersistGate } from 'redux-persist/integration/react';

import './styles/main.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<PersistGate
		loading={null}
		persistor={persistor}>
		<Provider store={store}>
			<Routing />
		</Provider>
	</PersistGate>,
);
