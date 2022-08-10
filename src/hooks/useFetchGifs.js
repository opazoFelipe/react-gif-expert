import { useState, useEffect  } from 'react'
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = ( category, totalGifs ) => {
    
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState( true )

    const getImages = async() => {
        const newImages = await getGifs( category, totalGifs )
        setImages( newImages )
        setIsLoading( false )
    }

    useEffect(() => {
        getImages()
    }, [])

    return { 
        images,
        isLoading
    }

}



