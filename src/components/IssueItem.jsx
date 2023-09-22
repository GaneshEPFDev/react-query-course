import { Link } from "react-router-dom";
import { GoComment, GoIssueClosed, GoIssueOpened } from "react-icons/go";
import { relativeDate } from "../helpers/relativeDate";

export function IssueItem({
  key,
  title,
  number,
  assignee,
  commentCount,
  createdDate,
  created,
  labels,
  status,
}) {
  return (
    <li key={key}>
      <div>
        {status === "done" || status === "cancelled" ? (
          <GoIssueClosed style={{ color: "green" }} />
        ) : (
          <GoIssueOpened style={{ color: "green" }} />
        )}{" "}
      </div>
      <div className="issue-content">
        <span>
          <Link to={`/issues/${number}`}>{title}</Link>
          {labels.map((label) => (
            <span key={label} className={`label red`}>
              {label}
            </span>
          ))}
        </span>
        <small>
          #{number} opened {relativeDate(createdDate)}
        </small>
      </div>
      {assignee ? <div>{assignee}</div> : null}
      <span className="comment-count">
        {commentCount > 0 ? (
          <>
            <GoComment />
            {commentCount}
          </>
        ) : null}
      </span>
    </li>
  );
}
