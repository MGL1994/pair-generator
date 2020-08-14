import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { NavBar } from './components'
import { Home, Groups } from './pages'

function App() {
    return (
        <div id="App">
            <NavBar />
            <main>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/groups" component={Groups} />
                <Redirect to="/" />
            </Switch>
            </main>
        </div>
    )
}

export default App