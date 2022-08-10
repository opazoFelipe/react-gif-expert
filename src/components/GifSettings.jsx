import { useState } from 'react'

export const GifSettings = ({ onNewTotalDisplayGifs, defaultTotal }) => {
    const [ totalDisplayGifs, setTotalDisplayGifs ] = useState( defaultTotal )

    const onInputChange = ({ target }) => {
        setTotalDisplayGifs( target.value )
    }

    const onSubmit = ( event ) => { 
        event.preventDefault()

        const newTotalDisplayGifs = totalDisplayGifs

        if ( newTotalDisplayGifs === 0 ) return

        onNewTotalDisplayGifs( newTotalDisplayGifs )
    }
    
    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="number" 
                placeholder="gifs por cuadrilla" 
                value={ totalDisplayGifs }
                onChange={ onInputChange }
            />
        </form>

    )
}
