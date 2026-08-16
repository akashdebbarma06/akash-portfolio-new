export type Project = {
  id: string;
  title: string;
  description: string;
  stack: string[];
  status: "Live" | "In Progress";
  repo?: string;
  live?: string;
};
