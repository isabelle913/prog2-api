import { useQuery } from "@tanstack/react-query";

const ApiTanStack = () => {
  const getPeople = async () => {
    const url = "https://swapi.dev/api/people";

    const response = await fetch(url);

    if (!response.ok) throw new Error();

    const people = await response.json();

    console.log("ApiTanStack", people);

    return people.results;
  };

  // hooks useQuery, retourne un objet qui contient
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["people"], // pour cache validation
    queryFn: getPeople, // passer la fonction pour qu'elle soit executer
  });

  if (isLoading) return <div>Loading en cours...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  // si les résultats sont reçu dans un array utiliser map
  // pas obliger que l'array arrive d'un api, on pourrait mapper sur un array d'autre données
  // Mettre une key si données provient d'un array. Utiliser index n'est pas bon car on pourrait looper sur plusieurs arrays
  return (
    <div>
      {data &&
        data.map((people) => {
          return (
            <div key={people.name}>
              <h2>
                {people.name} : {people.birth_year}
              </h2>
            </div>
          );
        })}
    </div>
  );
};

export default ApiTanStack;
