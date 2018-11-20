import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as _ from 'lodash';


import registerServiceWorker from './utils/registerServiceWorker';

import App from './components/App';


ReactDOM.render(<App foo={''} />, document.getElementById('root'));
registerServiceWorker();
