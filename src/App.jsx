import React from 'react';

import classes from './App.css';

export const App = () => {
    console.log('classes', classes);
    return (
        <div className={classes.item}>
            Item
        </div>
    )
}
