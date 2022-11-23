export const getGifs = async (category) => {
    const limit = 20;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=aJ4KVcQKfqWmQ7KMRaadZxhBINFPbCGd&q=${category}&limit=${limit}`;

    const respuesta = await fetch(url);
    const { data = [] } = await respuesta.json();
    const gifs = data.map((img) => ({
      id: img.id,
      title: img.title,
      imagen:{
        height:img.images.downsized_medium.height,
        width:img.images.downsized_medium.width,
        url:img.images.downsized_medium.url
      }
    }));

    return gifs;
  };