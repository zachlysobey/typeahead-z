import React, { MouseEvent, FC } from 'react'

import { TypeaheadSuggestion } from './TypeaheadSuggestion'

import styles from './styles.module.css'

interface TypeaheadSuggestionsProps {
    suggestions: string[]
    selectedSuggestion: null | number
    onMouseOverSuggestion: (index: number) => void
    onSelect: (e: MouseEvent<HTMLLIElement>) => void
}

export const TypeaheadSuggestions: FC<TypeaheadSuggestionsProps> = ({
    suggestions,
    selectedSuggestion,
    onMouseOverSuggestion,
    onSelect,
}) => {
    return (
        <ul className={styles.autocompleteItemList}>
            {suggestions.map((item: string, i) => {
                return (
                    <TypeaheadSuggestion
                        key={item}
                        onMouseOver={() => onMouseOverSuggestion(i)}
                        value={item}
                        onSelect={onSelect}
                        isSelected={i === selectedSuggestion}
                    />
                )
            })}
        </ul>
    )
}
