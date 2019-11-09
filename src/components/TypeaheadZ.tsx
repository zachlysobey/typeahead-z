import React, {
    useState,
    FC,
    ReactEventHandler,
    ChangeEvent,
    MouseEvent,
    KeyboardEventHandler,
} from 'react'
import keycode from 'keycode'

import styles from './TypeaheadZ.module.css'

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

    const onKeyDown: KeyboardEventHandler = e => {
        console.log('onKeyDown', keycode(e.keyCode))
    }

    const onClickAutocompleteItem: ReactEventHandler = (
        e: MouseEvent<HTMLLIElement>,
    ) => {
        const clickedItemText = e.currentTarget.innerHTML
        setInputValue(clickedItemText)
        filterItems(clickedItemText)
    }

    const AutoCompleteItems: FC<{ items: string[] }> = ({ items }) => (
        <ul className={styles.autocompleteItemList}>
            {items.map(item => (
                <li
                    key={item}
                    onClick={onClickAutocompleteItem}
                    className={styles.autocompleteItem}
                >
                    {item}
                </li>
            ))}
        </ul>
    )

    const isExpanded: boolean = !!autocompleteItems.length && inputValue !== ''

    return (
        <form>
            <h1>Typeahead-Z!</h1>
            <div className={styles.wrapper}>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="cool stuff here soon..."
                    value={inputValue}
                    onChange={onChangeInput}
                    onKeyDown={onKeyDown}
                />
                {isExpanded && <AutoCompleteItems items={autocompleteItems} />}
            </div>
        </form>
    )
}
