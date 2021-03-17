import React from 'react';
import ReactDOM from 'react-dom';

import { Test } from './Test';
import { foo } from './foo';
foo();
ReactDOM.render(
    <Test />,
    document.getElementById('app')
);



