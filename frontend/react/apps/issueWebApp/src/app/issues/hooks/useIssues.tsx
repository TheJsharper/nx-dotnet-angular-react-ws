import { useQuery } from "@tanstack/react-query";
import { gitHubApi } from "../../api/githubApi"
import { Issue } from "../models"

const getIssues = async (): Promise<Issue[]> => {
    const { data } = await gitHubApi.get('/issues');
    console.log("Issues", data)
    return data;
}



export const useIssues = () => {
    const issuesQuery = useQuery({
        queryKey: ['issues'],
        queryFn: getIssues
    });
    return {
        issuesQuery
    }
}