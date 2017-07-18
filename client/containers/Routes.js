import React from 'react'
import { browserHistory, HashRouter, Route, Switch } from 'react-router-dom'

import Hello from './Hello';

const Routes = () => {
    return (
    	<HashRouter history={ browserHistory }>
	        <Switch>
	        	<Route exact={ true } path="/" component={ Hello }/>
	        </Switch>
        </HashRouter>
    );
}

export default Routes
