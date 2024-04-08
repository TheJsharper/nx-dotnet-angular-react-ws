import { useEffect, useReducer, useState } from "react"

const getRandomNumberFromApi = async (): Promise<number> => {
    const random_number: number = await new Promise(resolve => setTimeout(() => resolve(Math.floor(Math.random() * 1000) + 1), 1000));
    if (random_number > 500) throw new Error('upsi!')
    return +random_number;
}

export const WithoutQuery: () => JSX.Element = () => {
    const [count, setCount] = useState<number>();

    const [isLoading, setIsloading] = useState<boolean>(true);

    const [error, setError] = useState<string>();

    const [key, forceRefresh] = useReducer((x) => x + 1, 0);

    useEffect(() => {
        setIsloading(true);
        getRandomNumberFromApi().then(nun => {setCount(nun); setError(undefined)}).catch(error => setError(error.message))
    }, [key]);

    useEffect(() => {
        if (count) setIsloading(false);
    }, [count]);

    useEffect(() => {
        if (error) setIsloading(false)
    }, [error])

    return (
        <div>

            {
                isLoading ? (<h2> Loading...</h2>) : !error && (<h2>Random number: {count}</h2>)
            }
            {
                !isLoading && error && (<h3>{error}</h3>)
            }
            <button onClick={forceRefresh} disabled={isLoading} > { isLoading? "..." :"fetch | force new random"} </button>

        </div>
    )
}