import { useQuery } from "react-query";

export const useLablesData = () => {
  const lablesQuery = useQuery(["labels"], () =>
    fetch("/api/labels").then((res) => res.json())
  );
  return lablesQuery;
};
