import React from 'react';

import { Header } from './components/index';
import { DevTools } from './utils/index';

export default class App extends React.Component {
    static path = '/';

    render() {
        return (
            <div>
                <Header></Header>
                { process.env.NODE_ENV !== 'production' ? <DevTools></DevTools> : null}
            </div>
        );
    }
}