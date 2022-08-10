export const getGifs = async ( category, totalGifs ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=VwptQHi14BmR7rSDjBEmfvYfAvfWPCCC&q=${category}&limit=${totalGifs}`
    
    const resp = await fetch( url )
    const { data } = await resp.json()

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    return gifs
}
