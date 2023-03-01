import { formatDate } from "../../utils/formatDate";
import { RepositoryItemProps } from "./interfaces";

export function RepositoryItem({ repository }: RepositoryItemProps) {
  const { name, description, html_url, language, updated_at } = repository;

  return (
    <li className="repository-item">
      <h2>{name}</h2>

      <p className="pt-2">{description}</p>

      {language && (
        <span className="flex items-center gap-1 mt-4 text-sm">
          <span className={`repo-language-color ${language}`} />
          {language}
        </span>
      )}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mt-4">
        <span className="text-sm">Atualizado em: {formatDate(updated_at)}</span>
        <a className="repository-link" href={html_url}>
          Acessar repositório
        </a>
      </div>
    </li>
  );
}
