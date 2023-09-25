import { useLablesData } from "../helpers/useLablesData";

export default function LabelList({ selected, toggle }) {
  const lablesQuery = useLablesData();
  return (
    <div className="labels">
      <h3>Labels</h3>
      {lablesQuery.isLoading ? (
        <p> Loading...</p>
      ) : (
        <ul>
          {lablesQuery.data.map((label) => (
            <li key={label.id}>
              <button
                className={`label ${
                  selected.includes(label.id) ? "selected" : ""
                }${label.color}`}
                onClick={() => toggle(label.id)}
              >
                {label.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
