import { useQuery } from "@tanstack/react-query";
import { gitHubApi } from "../../api/githubApi"
import { Issue } from "../models"
import { sleep } from "../../../helpers/sleep";
import { } from "axios";

interface issuesProps {
    state: string;
    labels: string[];

}
const getParams = (state: string, labels: string[]): {
    [key: string]: string;
} => {
    const map = new Map<string, string>();

    if (state !== "")
        map.set("state", state);

    if (labels.length > 0) {
        const labelsString = labels.join(",");
        map.set("labels", labelsString);
    }

    map.set('page', "1");

    map.set('per_page', "100");
    return Object.fromEntries(map.entries());
}
const getIssues = async (state: string, labels: string[] = []): Promise<Issue[]> => {

    await sleep(2);

    const params = getParams(state, labels);

    const { data } = await gitHubApi.get<Issue[]>('/issues', { params });

    return data;
}




export const useIssues = ({ state, labels }: issuesProps) => {
    const issuesQuery = useQuery({
        queryKey: ['issues', { state, labels }],
        queryFn: () => getIssues(state, labels)
    });
    return {
        issuesQuery
    }
}