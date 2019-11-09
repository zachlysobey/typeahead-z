import React from 'react'

interface Props {
    data: string[]
}
export const TypeaheadZ: React.FC<Props> = ({ data }) => {
    return (
        <form>
            <h1>Typeahead-Z!</h1>
            <input
                type="text"
                placeholder="cool stuff here soon..."
                onChange={e => console.log('onChange', e.target.value)}
            />
            <ul>
                {data.map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </form>
    )
}
