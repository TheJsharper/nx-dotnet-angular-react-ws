import { useQuery } from "@tanstack/react-query"
import { Issue } from "../models"
import { gitHubApi } from "../../api/githubApi"
import { sleep } from "../../../helpers/sleep"


const getIssue = async (issueNumber: number): Promise<Issue> => {
    await sleep(2);
    const { data } = await gitHubApi.get<Issue>(`/issues/${issueNumber}`);
    return data;
}
const getIssueComments = async (issueNumber: number): Promise<Issue[]> => {
    await sleep(2);
    const { data } = await gitHubApi.get<Issue[]>(`/issues/${issueNumber}/comments`);
    return data;
}


export const useIssue = (issueNumber: number) => {

    const issueQuery = useQuery({
        queryKey: ['issue', issueNumber],
        queryFn: () => getIssue(issueNumber)
    });

    const issueCommentQuery = useQuery({
        queryKey: ['issue', issueNumber, 'comments'],
        queryFn: () => getIssueComments(issueNumber),
        enabled: issueQuery.data !== undefined
    });

    return {
        issueQuery,
        issueCommentQuery
    }

}