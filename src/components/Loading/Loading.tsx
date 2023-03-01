import { LoadingProps } from "./interfaces";

export const Loading = ({ text }: LoadingProps) => (
  <span className="text-2xl font-bold animate-pulse">{text}</span>
);
