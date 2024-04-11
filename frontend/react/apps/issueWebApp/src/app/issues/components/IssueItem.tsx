import { FiInfo, FiMessageSquare, FiCheckCircle, } from 'react-icons/fi';
import { Issue, Label } from '../models';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { getIssue, getIssueComments } from '../hooks/useIssue';
import { timeSince } from '../../../helpers/time-since';

interface IssueItemProps {
    issue: Issue;
}

export const IssueItem: FC<IssueItemProps> = ({ issue }) => {

    const navigate = useNavigate();

    const queryClient = useQueryClient();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const onMouseEnter = () => {
        console.log("===> Mouse Enter");
        queryClient.prefetchQuery({
            queryKey: ['issue', issue.number],
            queryFn: () => getIssue(issue.number)
        });

        queryClient.prefetchQuery({
            queryKey: ['issues', issue.number, "comments"],
            queryFn: () => getIssueComments(issue.number)
        });


    }
    const preSetData = () => {

        queryClient.setQueryData(
            ['issue', issue.number],
            issue,
            {
                updatedAt: new Date().getTime() + 100000
            }
        )
    }


    return (
        <div className="card mb-2 issue"
            onClick={() => navigate(`/issues/issue/${issue.number}`)}
            onMouseEnter={preSetData}
        >
            <div className="card-body d-flex align-items-center">

                {
                    issue.state == 'open'
                        ? <FiInfo size={30} color="red" />
                        : <FiCheckCircle size={30} color="green" />
                }


                <div className="d-flex flex-column flex-fill px-2">
                    <span>{issue.title}</span>
                    <span className="issue-subinfo">#{issue.number} {timeSince(issue.created_at)} ago by <span className='fw-bold'>{issue.user.login}</span></span>
                    <div>
                        {
                            issue.labels.map((value: Label) => (<span key={value.id} className='badge rounded-pill m-1 ' style={{ backgroundColor: `#${value.color}`, color: 'black' }} > {value.name}</span>))
                        }
                    </div>
                </div>

                <div className='d-flex align-items-center'>
                    <img src={issue.user.avatar_url} alt="User Avatar" className="avatar" />
                    <span className='px-2'>{issue.comments}</span>
                    <FiMessageSquare />
                </div>

            </div>
        </div>
    )
}
