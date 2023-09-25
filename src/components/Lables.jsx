import { useLablesData } from "../helpers/useLablesData";

export const Lables = ({ label }) => {
  const lablesQuery = useLablesData();

  console.log(lablesQuery.data);
  if (lablesQuery.isLoading) {
    return null;
  }

  const labelObj = lablesQuery.data.find(
    (queryLabel) => queryLabel.id === label
  );
  if (!labelObj) {
    return null;
  }
  return <span className={labelObj.color}>{labelObj.name}</span>;
};
