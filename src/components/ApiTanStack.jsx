import { useQuery } from '@tanstack/react-query'

const ApiTanStack = () => {

    const getPeople = async () => {
        const url = 'https://swapi.dev/api/people'

        const response = await fetch(url)

        if(!response.ok) throw new Error()

        const people = await response.json()

        console.log('ApiTanStack', people)

        return people.results
    }

    // hooks useQuery, retourne un objet qui contient
    const { isLoading, isError, data, error } = useQuery({
        queryKey: ['people'], // pour cache validation
        queryFn: getPeople // passer la fonction pour qu'elle soit executer
    })

    if(isLoading) return <div>Loading en cours...</div>
    if(isError) return <div>Error: {error.message}</div>

    // sinon faire qq avec les data
    return (
        <div>ApiTanStack</div>
    )
}

export default ApiTanStack