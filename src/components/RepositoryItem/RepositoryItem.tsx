import { formatDate } from "../../utils/formatDate";
import { RepositoryItemProps } from "./interfaces";

export function RepositoryItem({ repository }: RepositoryItemProps) {
  const { name, description, html_url, language, updated_at } = repository;

  return (
    <li className="repository-item">
      <h2>{name}</h2>

      <p className="pt-2">{description}</p>

      <div className="flex justify-between items-start py-4">
        <div>
          <span className="flex items-center gap-1">
            {language && <span className={`language ${language}`} />}
            {language}
          </span>
          <span>Atualizado em: {formatDate(updated_at)}</span>
        </div>
      </div>
      <a className="repository-link" href={html_url}>
        Acessar repositório
      </a>
    </li>
  );
}
