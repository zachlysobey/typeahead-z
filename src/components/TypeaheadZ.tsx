import React, {
    useState,
    FC,
    ReactEventHandler,
    ChangeEvent,
    MouseEvent,
} from 'react'

interface Props {
    data: string[]
}
export const TypeaheadZ: FC<Props> = ({ data }) => {
    const [inputValue, setInputValue] = useState('')
    const [autocompleteItems, setAutocompleteItems] = useState(data)

    const filterItems = (text: string): void => {
        const filteredItems = data.filter(item =>
            item.toLowerCase().includes(text.toLowerCase()),
        )
        setAutocompleteItems(filteredItems)
    }

    const onChangeInput: ReactEventHandler = (
        e: ChangeEvent<HTMLInputElement>,
    ) => {
        const text = e.target.value
        setInputValue(text)
        filterItems(text)
    }

    const onClickAutocompleteItem: ReactEventHandler = (
        e: MouseEvent<HTMLLIElement>,
    ) => {
        const clickedItemText = e.currentTarget.innerHTML
        setInputValue(clickedItemText)
        filterItems(clickedItemText)
    }

    const AutoCompleteItems: FC<{ items: string[] }> = ({ items }) => (
        <ul>
            {items.map(item => (
                <li key={item} onClick={onClickAutocompleteItem}>
                    {item}
                </li>
            ))}
        </ul>
    )

    return (
        <form>
            <h1>Typeahead-Z!</h1>
            <input
                type="text"
                placeholder="cool stuff here soon..."
                value={inputValue}
                onChange={onChangeInput}
            />
            {!autocompleteItems.length || inputValue === '' ? null : (
                <AutoCompleteItems items={autocompleteItems} />
            )}
        </form>
    )
}
