import { FiInfo, FiMessageSquare, FiCheckCircle, } from 'react-icons/fi';
import { Issue } from '../models';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { getIssue, getIssueComments } from '../hooks/useIssue';

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
    const preSetData = ()=>{
       
        queryClient.setQueryData(
            ['issue', issue.number],
            issue,
            {
                updatedAt: new Date().getTime() +100000
            }
        )
    }

    const diference = (): number => {
        const createdAt = new Date(issue.created_at).getTime();

        const today = new Date().getTime();

        const between = today - createdAt;

        return Math.round(between / (1000 * 3600 * 24))

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
                    <span className="issue-subinfo">#{issue.number} opened {diference()} days ago by <span className='fw-bold'>{issue.user.login}</span></span>
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
