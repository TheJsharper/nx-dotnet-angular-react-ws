import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifsReponse } from "../services/gifs.service";

export const GifGrid = (props: { category: string }) => {

    const data: { gifs: Array<GifsReponse>, isLoading: boolean } = useFetchGifs({ category: props.category });

    const { gifs, isLoading } = data;
    if(isLoading)
        return (<div>{isLoading} </div>)
    

    return (
        <div>

            <h1>Category: {props.category}</h1>
            {gifs.map((value: GifsReponse) => (<div key={value.id}> <h1>{value.title}</h1> <img src={value.url}  alt="testing"/> </div>))}

        </div>
    );
} 