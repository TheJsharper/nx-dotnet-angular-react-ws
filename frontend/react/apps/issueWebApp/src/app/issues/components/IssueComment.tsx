import { FC } from "react";
import ReactMarkdown from "react-markdown"
import { Issue } from "../models";

interface IssueCommentProps {
  issue: Issue;
}

export const IssueComment: FC<IssueCommentProps> = ({ issue }) => {

  return (
    <div className="col-12">
      <div className="card border-white mt-2">
        <div className="card-header bg-dark">
          <img src={issue.user.avatar_url} alt="User Avatar" className="avatar" />
          <span className="mx-2">{issue.user.login}</span>
        </div>
        <div className="card-body text-dark">
          <ReactMarkdown>{issue.body}</ReactMarkdown>
        </div>
      </div>
    </div>
  )
}
