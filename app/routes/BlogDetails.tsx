import { format } from "date-fns";

export interface BlogDetailsProps {
  title: string;
  description?: string;
  created: string;
}

export default function BlogDetails({ created }: BlogDetailsProps) {
  return (
    <>
      <span className="text-gray-600">{format(created, "do LLL, yyyy")}</span>
    </>
  );
}
