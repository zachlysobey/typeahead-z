import React from 'react'

import { typeaheadData } from './typeahead-data'

export const TypeaheadZ: React.FC<{}> = () => {
    return (
        <form>
            <h1>Typeahead-Z!</h1>
            <input type="text" placeholder="cool stuff here soon..." />
            <ul>
                {typeaheadData.map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </form>
    )
}
