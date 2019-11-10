import React, { MouseEvent, FC } from 'react'

import { TypeaheadSuggestion } from './TypeaheadSuggestion'

import styles from './styles.module.css'

interface TypeaheadSuggestionsProps {
    currentText: string
    suggestions: string[]
    selectedSuggestion: null | number
    onMouseOverSuggestion: (index: number) => void
    onSelect: (e: MouseEvent<HTMLLIElement>) => void
}

export const TypeaheadSuggestions: FC<TypeaheadSuggestionsProps> = ({
    currentText,
    suggestions,
    selectedSuggestion,
    onMouseOverSuggestion,
    onSelect,
}) => {
    const highlightMatching = (item: string) =>
        item.replace(
            new RegExp(`(${currentText})`, 'i'),
            `<span style="text-decoration: underline">$1</span>`,
        )
    return (
        <ul className={styles.autocompleteItemList}>
            {suggestions.map(highlightMatching).map((item: string, i) => {
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
