import { Link } from "react-router-dom";
import { GoComment, GoIssueClosed, GoIssueOpened } from "react-icons/go";
import { relativeDate } from "../helpers/relativeDate";
import { useUserData } from "../helpers/useUserData";

export function IssueItem({
  key,
  title,
  number,
  assignee,
  commentCount,
  createdDate,
  createdBy,
  labels,
  status,
}) {
  const createdByUser = useUserData(createdBy);
  const assigneeUser = useUserData(assignee);

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
          #{number} opened {relativeDate(createdDate)} by{" "}
          {createdByUser.isSuccess ? createdByUser.data.name : ""}
        </small>
      </div>
      {assignee ? (
        <img
          className="assigned-to"
          alt={`Assigned to ${
            assigneeUser.isSuccess ? assigneeUser.data.name : "avatar"
          }`}
          src={
            assigneeUser.isSuccess ? assigneeUser.data.profilePictureUrl : ""
          }
        />
      ) : null}
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
