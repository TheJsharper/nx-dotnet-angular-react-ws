import {useQuery} from '@tanstack/react-query';

const getRandomNumberFromApi = async (): Promise<number> => {
    const random_number: number = await new Promise(resolve => setTimeout(() => resolve(Math.floor(Math.random() * 1000) + 1), 1000));
    if (random_number > 500) throw new Error('upsi!')
   console.log("calling..")
    return +random_number;
}


export const WithQuery:()=> JSX.Element = ()=>{
    const query = useQuery({queryKey:['count'],queryFn:getRandomNumberFromApi } );

    
    return (<div>
        {
            query.isFetching ? (<h2>Loading ...</h2>)
            : (<h2> Random number:{query.data }</h2>)
        }
        {
            !query.isFetching && query.isError && (<h2>{query.error.message}</h2>)
        }
        <button onClick={()=>query.refetch()} disabled={query.isFetching} >
            {
                query.isFetching ? '...': 'Refech | reforce next number'
            }
        </button>
    </div>)
}