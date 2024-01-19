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
    <section className="container py-8">
      <div className="flex gap-12">
        <div className="min-w-48">
          <div className="sticky top-12">
            <h1>Marcelo Pereira</h1>
            <p>Frontend Developer</p>
          </div>
        </div>

        <RepositoriesList repositories={repositories} isLoading={isLoading} />
      </div>
    </section>
  );
};
