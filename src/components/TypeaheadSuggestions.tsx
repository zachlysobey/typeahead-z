import React, { MouseEvent, FC } from 'react'

import styles from './TypeaheadZ.module.css'

interface TypeaheadSuggestionsProps {
    suggestions: string[]
    onClick: (e: MouseEvent<HTMLLIElement>) => void
}
export const TypeaheadSuggestions: FC<TypeaheadSuggestionsProps> = ({
    suggestions,
    onClick,
}) => (
    <ul className={styles.autocompleteItemList}>
        {suggestions.map(item => (
            <li
                key={item}
                onClick={onClick}
                className={styles.autocompleteItem}
            >
                {item}
            </li>
        ))}
    </ul>
)
