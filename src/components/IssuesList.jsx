import { useQuery } from "react-query";
import { IssueItem } from "./IssueItem";

export default function IssuesList({ labels }) {
  const { isLoading, data } = useQuery(["issues", { labels }], () => {
    const lablesString = labels.map((label) => `labels[]=${label}`).join("&");
    return fetch(`/api/issues?${lablesString}`).then((res) => res.json());
  });
  return (
    <div>
      <h2>Issues List</h2>
      {isLoading ? (
        "Loading..."
      ) : (
        <ul className="issues-list">
          {data.map((issue) => {
            return (
              <IssueItem
                key={issue.id}
                title={issue.title}
                number={issue.number}
                assignee={issue.assignee}
                commentCount={issue.comments.length}
                createdBy={issue.createdBy}
                createdDate={issue.createdDate}
                labels={issue.labels}
                status={issue.status}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
}
