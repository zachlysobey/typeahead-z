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

import styles from './styles.module.css'

interface TypeaheadZProps {
    data: string[]
    maxSuggestions?: number
    placeholder?: string
    onChange?: (value: string) => void
}

export const TypeaheadZ: FC<TypeaheadZProps> = ({
    data,
    maxSuggestions = 5,
    placeholder = '',
    onChange = () => {},
}) => {
    const [inputValue, setInputValue] = useState('')
    const [suggestions, setSuggestions] = useState(
        data.slice(0, maxSuggestions),
    )
    const [isExpanded, setIsExpanded] = useState(false)
    const [selectedSuggestion, selectSuggestion] = useState<null | number>(null)

    const filterBy = (text: string): void => {
        const filteredSuggestions = data
            .filter(item => item.toLowerCase().includes(text.toLowerCase()))
            .slice(0, maxSuggestions)
        setSuggestions(filteredSuggestions)
        if (filteredSuggestions.length > 0 && text !== '') {
            setIsExpanded(true)
        } else {
            setIsExpanded(false)
            selectSuggestion(null)
        }
    }

    const onChangeInput: ReactEventHandler = (
        e: ChangeEvent<HTMLInputElement>,
    ) => {
        const text = e.target.value
        setInputValue(text)
        onChange(text)
        filterBy(text)
    }

    const onClickAutocompleteItem: ReactEventHandler = (
        e: MouseEvent<HTMLLIElement>,
    ) => {
        const clickedItemText = e.currentTarget.innerHTML
        console.log('setting to ', clickedItemText)
        setInputValue(clickedItemText)
        onChange(clickedItemText)
        filterBy(clickedItemText)
    }

    const onKeyDown: KeyboardEventHandler = e => {
        const key = keycode(e.keyCode)
        switch (key) {
            case 'down':
                setIsExpanded(suggestions.length > 0)
                if (selectedSuggestion === null) {
                    selectSuggestion(0)
                } else if (selectedSuggestion !== suggestions.length - 1) {
                    selectSuggestion(selectedSuggestion + 1)
                }
                break
            case 'up':
                if (
                    isExpanded &&
                    selectedSuggestion !== null &&
                    selectedSuggestion > 0
                ) {
                    selectSuggestion(selectedSuggestion - 1)
                }
                break
            case 'enter':
            case 'tab':
                if (isExpanded) {
                    e.preventDefault()
                }
                if (typeof selectedSuggestion === 'number') {
                    setInputValue(suggestions[selectedSuggestion])
                    onChange(suggestions[selectedSuggestion])
                }
                setIsExpanded(false)
                break
            case 'esc':
                setIsExpanded(false)
                selectSuggestion(null)
                break
        }
    }

    return (
        <div className={styles.wrapper}>
            <input
                type="text"
                placeholder={placeholder}
                value={inputValue}
                className={styles.input}
                onChange={onChangeInput}
                onKeyDown={onKeyDown}
            />
            {isExpanded && (
                <TypeaheadSuggestions
                    currentText={inputValue}
                    suggestions={suggestions}
                    selectedSuggestion={selectedSuggestion}
                    onSelect={onClickAutocompleteItem}
                    onMouseOverSuggestion={index => selectSuggestion(index)}
                />
            )}
        </div>
    )
}
