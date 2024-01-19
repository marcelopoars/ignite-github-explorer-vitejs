import { LoadingProps } from "./interfaces";

export const Loading = ({ text }: LoadingProps) => (
  <span className="text-2xl font-bold animate-pulse py-8">{text}</span>
);
