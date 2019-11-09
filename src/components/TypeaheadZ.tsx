import React, { useState, FC, ReactEventHandler, ChangeEvent } from 'react'

interface Props {
    data: string[]
}
export const TypeaheadZ: FC<Props> = ({ data }) => {
    const [autocompleteItems, setAutocompleteItems] = useState(data)

    const onChange: ReactEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value
        console.log('onChange', text)
        setAutocompleteItems(
            data.filter(item =>
                item.toLowerCase().includes(text.toLowerCase()),
            ),
        )
    }

    return (
        <form>
            <h1>Typeahead-Z!</h1>
            <input
                type="text"
                placeholder="cool stuff here soon..."
                onChange={onChange}
            />
            <ul>
                {autocompleteItems.map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </form>
    )
}
