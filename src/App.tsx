import React from 'react'

import { FruitForm } from './components/FruitForm/FruitForm'

function App() {
    return (
        <>
            <h1>Typeahead-Z Demo</h1>
            <FruitForm />
            <GithubLink />
        </>
    )
}

function GithubLink() {
    return (
        <p>
            <a href="https://github.com/zachlysobey/typeahead-z">
                <em>View project on GitHub</em>
            </a>
        </p>
    )
}

export default App
