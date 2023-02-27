import { useEffect, useState } from "react";

import { RepositoryItem } from "../RepositoryItem/RepositoryItem";
import { Repository } from "../RepositoryItem/interfaces";

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/marcelopoars/repos").then((response) =>
      response.json().then((data: Repository[]) => setRepositories(data))
    );
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map((repository) => (
          <RepositoryItem key={repository.name} repository={repository} />
        ))}
      </ul>
    </section>
  );
}
