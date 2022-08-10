import { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('One Punch')

    const onInputChange = ({ target }) => {
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        

        const newInputValue = inputValue.trim()

        if ( newInputValue.length <= 1 ) return

        // setCategories( categories => {

        //     return [ inputValue.trim(), ...categories ]
            
        // } )

        onNewCategory( newInputValue)
        setInputValue('')
    }

    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>

    )
}

