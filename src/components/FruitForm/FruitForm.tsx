import React, { useState, FC } from 'react'

import { TypeaheadZ } from '../TypeaheadZ'
import { fruitNames } from './fruit-names'

export const FruitForm: FC = () => {
    const [formValues, setFormValues] = useState({
        fruitName: '',
    })

    return (
        <form
            onSubmit={e => {
                alert(JSON.stringify(formValues))
                e.preventDefault()
            }}
        >
            <TypeaheadZ
                data={fruitNames}
                onChange={fruitName => {
                    setFormValues({ ...formValues, fruitName })
                }}
                placeholder="start typing..."
            />
            <input type="submit" value="Submit" />
        </form>
    )
}
