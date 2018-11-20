import * as React from 'react';
import * as _ from 'lodash';

import '../styles/base.css';
import '../styles/App.css';


interface IProps {
    foo: string;
}

interface IState {
    bar: string;
}

export default class App extends React.Component<IProps, IState> {
    state: IState = {
        bar: '',
    };

    componentDidMount() {
    }

    render() {
        return (
            <div className='App'>
                Default React app
            </div>
        );
    }
}
