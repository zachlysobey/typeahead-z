import React, { MouseEvent, FC } from 'react'

import styles from './styles.module.css'

interface TypeaheadSuggestionProps {
    value: string
    onSelect: (e: MouseEvent<HTMLLIElement>) => void
    isSelected: boolean
    onMouseOver: () => void
}
export const TypeaheadSuggestion: FC<TypeaheadSuggestionProps> = ({
    value,
    onSelect,
    isSelected,
    onMouseOver,
}) => {
    return (
        <li
            onClick={onSelect}
            className={`${isSelected ? styles.selected : ''} ${
                styles.autocompleteItem
            }`}
            onMouseOver={onMouseOver}
            dangerouslySetInnerHTML={{ __html: value }}
        />
    )
}
