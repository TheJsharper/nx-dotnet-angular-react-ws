import { useEffect, useState } from "react";
import { GifsReponse, getGifs } from "../services/gifs.service";

export const useFetchGifs = (props: { category: string }) => {

    const [gifs, setGifs] = useState<Array<GifsReponse>>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {

        (async () => {
        
            const gifsResponse: Array<GifsReponse> = await getGifs(props.category);
            console.log(gifsResponse);
            setGifs(gifsResponse)
            setIsLoading(false)

        })();
    }, [])
    return {
        gifs,
        isLoading
    }
}
