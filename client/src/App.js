import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { NavBar } from './components'
import { Home } from './pages'

function App() {
    return (
        <div id="App">
            <NavBar />
            <main>
            <Switch>
                <Route exact path="/" component={Home}/>
            </Switch>
            </main>
        </div>
    )
}

export default App