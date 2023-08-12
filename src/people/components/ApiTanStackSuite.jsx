// Mettre en structure de dossiers people/components + service, éventuellement hooks et state
// Faire fichier de config à la source
// Faire service

import { useQuery } from "@tanstack/react-query";
import PeopleService from "../services/PeopleService";

// Instancie la class
const peopleService = new PeopleService();

const ApiTanStackSuite = () => {
  console.log(peopleService);

  // hooks useQuery, retourne un objet qui contient
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["people"], // pour cache validation
    queryFn: peopleService.getAllPeople, // passer la fonction pour qu'elle soit executer

    // Le prof a du faire ça pour que ça fonctionne
    // queryFn: peopleService.getAllPeople.bind(peopleService),
    // ou
    // queryFn: () => peopleService.getAllPeople()

    // Pour passer un argument
    // queryFn: () => peopleService.getAllPeople(1)
  });

  console.log(data);

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

export default ApiTanStackSuite;
