export const getGifs = async(category)=>{
    const apiKey="zrTIkJnWcGtHTDXDV1oS0hfTlpmX09u7";
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map( gif=>({
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url
    }));
    return gifs;
}