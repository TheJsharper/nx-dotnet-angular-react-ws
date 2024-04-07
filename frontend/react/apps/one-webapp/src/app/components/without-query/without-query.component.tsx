import { useEffect, useState } from "react"

const getRandomNumberFromApi = async ():Promise<number>=>{
    const random_number:number =await new Promise(resolve => setTimeout(()=>resolve( Math.floor(Math.random() * 1000) + 1), 1000));
 if(random_number > 500) throw new Error('upsi!')
    return +random_number;
}

export const WithoutQuery: () => JSX.Element = ()=>{
    const [count, setCount] = useState<number>();
    const [isLoading, setIsloading] = useState<boolean>(true);

    const [error, setError] = useState<string>();
    
    useEffect(()=>{
        getRandomNumberFromApi().then(nun => setCount(nun)).catch(error=> setError(error.message))
    },[]);
    useEffect(()=>{
        if(count) setIsloading(false);
    }, [count])
    return (
        <div>
             {isLoading&&(<h2>Loading...</h2>)}
             {error && (<h2>Error {error}</h2>)}
            <h2>

                Random Number: {count}
            </h2>
        </div>
    )
}