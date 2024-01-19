import { formatDate } from "../../utils/formatDate";
import { RepositoryItemProps } from "./interfaces";

export function RepositoryItem({ repository }: RepositoryItemProps) {
  const {
    name,
    description,
    html_url,
    updated_at,
    created_at,
    homepage,
    topics,
  } = repository;

  return (
    <li className="border-b border-gray-500 py-8">
      <h3 className="text-2xl font-medium text-blue-500">{name}</h3>

      <div className="flex justify-between gap-12 pt-2">
        <span className="text-sm">Criado em: {formatDate(created_at)}</span>
        <span className="text-sm">Atualizado em: {formatDate(updated_at)}</span>
      </div>

      {description && <p className="text-lg text-gray-50 pt-2">{description}</p>}

      {!!topics.length && (
        <div className="flex items-center gap-4 pt-2">
          {topics.map((topic) => (
            <span className="flex items-center gap-2 text-sm">
              <span className="inline-block w-3 h-3 rounded-full bg-blue-500" />
              {topic}
            </span>
          ))}
        </div>
      )}

      <aside className="pt-6">
        <ul className="flex gap-6">
          <li>
            <a
              className="bg-green-500 py-2 px-4 rounded-md inline-block font-semibold text-sm text-center text-white"
              href={html_url}
              target="_blank"
            >
              Ver no Github
            </a>
          </li>
          <li>
            <a
              className="bg-green-500 py-2 px-4 rounded-md inline-block font-semibold text-sm text-center text-white"
              href={homepage || html_url}
              target="_blank"
            >
              Ver página
            </a>
          </li>
        </ul>
      </aside>
    </li>
  );
}
