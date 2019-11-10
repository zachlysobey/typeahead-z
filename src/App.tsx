import React from 'react'

import { TypeaheadZ } from './components/TypeaheadZ'
import { fruitNames } from './fruit-names'

import styles from './App.module.css'

function App() {
    return (
        <div className={styles.app}>
            <h1>Typeahead-Z!</h1>
            <form
                onSubmit={e => {
                    e.preventDefault()
                    console.log('onSubmit', e.target)
                }}
                className={styles.fruitForm}
            >
                <TypeaheadZ data={fruitNames} />
            </form>
        </div>
    )
}

export default App
