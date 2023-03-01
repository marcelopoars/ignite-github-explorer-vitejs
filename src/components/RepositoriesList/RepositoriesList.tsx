import { Repository } from "../../Models";
import { RepositoryItem } from "../RepositoryItem";

interface RepositoriesListProps {
  repositories: Repository[];
}

export const RepositoriesList = ({ repositories }: RepositoriesListProps) => {
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
