import { useState } from "react";
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState<Array<string>>([]);


    return (
        <div>
            <h1>GifExpertApp</h1>
            <AddCategory {... { setCategories }} />

            <ol>
                {categories.map((value: string, index: number) => (<GifGrid key={index} category={value} />))}
            </ol>
        </div>
    );
}