import { getGifs } from "../services/gifs.service";

export const GifGrid = (props: { category: string }) => {

  
    getGifs();
    return (
        <div>
            <h3>{props.category}</h3>
            <div>{props.category}</div>
        </div>
    );
} 