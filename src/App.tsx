import React from 'react'

import { TypeaheadZ } from './components/TypeaheadZ'
import { fruitNames } from './fruit-names'

function App() {
    return (
        <div className="app">
            <TypeaheadZ data={fruitNames} />
        </div>
    )
}

export default App
