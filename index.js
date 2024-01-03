/**
 * @format
 */
import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import App from './App';
import { name as appName } from './app.json';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './App/Redux/store';

const Main = () => {
    return (
        <Provider
            store={store}
        >
            <PersistGate
                loading={null}
                persistor={persistor}
            >
                <App />
            </PersistGate>
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => Main);
