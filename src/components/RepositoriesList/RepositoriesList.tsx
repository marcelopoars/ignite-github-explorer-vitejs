import { Repository } from "../../Models";
import { Loading } from "../Loading";
import { RepositoryItem } from "../RepositoryItem";

interface RepositoriesListProps {
  repositories: Repository[];
  isLoading: boolean;
}

export const RepositoriesList = ({
  repositories,
  isLoading,
}: RepositoriesListProps) => {
  if (isLoading) {
    return <Loading text="Buscando repositórios..." />;
  }

  return (
    <ul>
      {repositories.map((repository) => (
        <RepositoryItem key={repository.name} repository={repository} />
      ))}
    </ul>
  );
};
