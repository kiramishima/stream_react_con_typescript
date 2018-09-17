import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Hello } from './components/Hello';

ReactDOM.render(
    <Hello compiler="Typescript v3" framework="React" />,
    document.getElementById("root")
);