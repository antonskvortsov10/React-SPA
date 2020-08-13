import React from 'react';
import { DevTools } from './utils/index';

export default class App extends React.Component {
    static path = '/';

    render() {
        return (
            <div>
                <h1>App started!</h1>
                { process.env.NODE_ENV !== 'production' ? <DevTools></DevTools> : null}
            </div>
        );
    }
}