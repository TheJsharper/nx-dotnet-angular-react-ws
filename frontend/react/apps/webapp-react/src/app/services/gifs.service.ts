export const getGifs = async () => {
    const url = `http://api.giphy.com/v1/gifs/search/?api_key=DlyhUudrpjVFrMFoZ0y7GISYkLk0ABt5&q=test`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img: any) => ({ id: img.id, title: img.title, url: img.images.downsized_medium.url }));
    console.log("response", gifs);
    return gifs;
}