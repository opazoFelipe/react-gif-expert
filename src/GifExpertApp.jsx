import { useState } from 'react'
import { AddCategory, GifGrid, GifSettings } from './components'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return
        // setCategories([ ...categories, 'Valoran' ])
        setCategories([newCategory, ...categories])
        // setCategories( oldCategories => [ ...oldCategories, 'Valoran' ])
    }

    const [totalDisplayGifs, setTotalDisplayGifs] = useState(20)

    const onNewTotalDisplayGifs = ( newValue ) => {
        if ( newValue <= 0 ) return 

        setTotalDisplayGifs( newValue )
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            {/* <GifSettings 
                onNewTotalDisplayGifs={ value => onNewTotalDisplayGifs( value ) }
                defaultTotal={totalDisplayGifs}
            /> */}

            <br />

            <AddCategory
                onNewCategory={value => onAddCategory(value)}
            />

            {
                categories.map((category, index) => (
                    <GifGrid 
                        key={ category } 
                        category={ category }
                        totalGifs={ totalDisplayGifs }
                    />
                ))
            }
        </>

        // test
    )
}
