import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Home } from './pages'

function App() {
    return (
        <div id="App">
            <main>
            <Switch>
                <Route exact path="/" component={Home}/>
            </Switch>
            </main>
        </div>
    )
}

export default App