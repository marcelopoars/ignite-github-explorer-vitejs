import { RepositoryItemProps } from "./interfaces";

export function RepositoryItem({ repository }: RepositoryItemProps) {
  const { name, description, html_url } = repository;
  
  return (
    <li>
      <span>{name}</span>

      <p>{description}</p>

      <a href={html_url}>Acessar repositório</a>
    </li>
  );
}
