import { useEffect, useState } from "react";

import { Loading, RepositoriesList } from "../../components";
import { Repository } from "../../Models";

export const RepositoriesPage = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/marcelopoars/repos").then((response) =>
      response.json().then((data: Repository[]) => {
        setRepositories(data);
        setIsLoading(false);
      })
    );
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loading text="Buscando repositórios..." />
      ) : (
        <RepositoriesList repositories={repositories} />
      )}
    </div>
  );
};
