import { useEffect, useState } from "react";

import { RepositoryItem } from "../RepositoryItem/RepositoryItem";
import { Repository } from "../RepositoryItem/interfaces";

export const RepositoriesList = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/marcelopoars/repos").then((response) =>
      response.json().then((data: Repository[]) => setRepositories(data))
    );
  }, []);

  return (
    <section className="container py-8">
      <h1>My GitHub Repositories</h1>

      <ul className="pt-8">
        {repositories.map((repository) => (
          <RepositoryItem key={repository.name} repository={repository} />
        ))}
      </ul>
    </section>
  );
};
