export interface Repository {
  name: string;
  description: string;
  html_url: string;
  language: string;
  updated_at: string;
}

export interface RepositoryItemProps {
  repository: Repository;
}
