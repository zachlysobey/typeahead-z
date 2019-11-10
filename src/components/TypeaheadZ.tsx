import React, {
    useState,
    FC,
    ReactEventHandler,
    ChangeEvent,
    MouseEvent,
    KeyboardEventHandler,
} from 'react'
import keycode from 'keycode'
import { TypeaheadSuggestions } from './TypeaheadSuggestions'

import styles from './TypeaheadZ.module.css'

interface TypeaheadZProps {
    data: string[]
}
export const TypeaheadZ: FC<TypeaheadZProps> = ({ data }) => {
    const [inputValue, setInputValue] = useState('')
    const [suggestions, setTypeaheadSuggestions] = useState(data)
    const [isExpanded, setIsExpanded] = useState(false)

    const filterItems = (text: string): void => {
        const filteredItems = data.filter(item =>
            item.toLowerCase().includes(text.toLowerCase()),
        )
        setTypeaheadSuggestions(filteredItems)
        setIsExpanded(filteredItems.length > 0 && text !== '')
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

    const onKeyDown: KeyboardEventHandler = e => {
        const key = keycode(e.keyCode)
        switch (key) {
            case 'down':
            default:
                console.log('onKeyDown', key)
        }
    }

    return (
        <div className={styles.wrapper}>
            <input
                className={styles.input}
                type="text"
                placeholder="cool stuff here soon..."
                value={inputValue}
                onChange={onChangeInput}
                onKeyDown={onKeyDown}
            />
            {isExpanded && (
                <TypeaheadSuggestions
                    suggestions={suggestions}
                    onClick={onClickAutocompleteItem}
                />
            )}
        </div>
    )
}
