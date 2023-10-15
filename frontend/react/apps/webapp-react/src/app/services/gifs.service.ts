export const getGifs: (term: string) => Promise<Array<GifsReponse>> = async (term: string) => {
    const url = `http://api.giphy.com/v1/gifs/search/?api_key=DlyhUudrpjVFrMFoZ0y7GISYkLk0ABt5&q=${term}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const gifs: Array<GifsReponse> = data.map((img: any) => ({ id: img.id, title: img.title, url: img.images.downsized_medium.url }));

    return gifs;
}

export interface GifsReponse {
    id: string, title: string, url: string
}