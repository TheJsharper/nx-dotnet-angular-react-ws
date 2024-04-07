import { useEffect, useState } from "react"

const getRandomNumberFromApi = async ():Promise<number>=>{
    const random_number:number =await new Promise(resolve => setTimeout(()=>resolve( Math.floor(Math.random() * 1000) + 1), 1000));
    return +random_number;
}

export const WithoutQuery: () => JSX.Element = ()=>{
    const [count, setCount] = useState<number>();

    useEffect(()=>{
        getRandomNumberFromApi().then(nun => setCount(nun))
    },[])
    return (
        <div>
            <h2>

                Random Number: {count}
            </h2>
        </div>
    )
}