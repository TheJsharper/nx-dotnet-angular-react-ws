import { useQuery } from "@tanstack/react-query";
import { gitHubApi } from "../../api/githubApi"
import { Issue } from "../models"
import { sleep } from "../../../helpers/sleep";
import { } from "axios";
import { useEffect, useState } from "react";

interface issuesProps {
    state: string;
    labels: string[];
    page?: number;

}


const getParams = (state: string, labels: string[], page: number): {
    [key: string]: string;
} => {
    const map = new Map<string, string>();

    if (state !== "")
        map.set("state", state);

    if (labels.length > 0) {
        const labelsString = labels.join(",");
        map.set("labels", labelsString);
    }

    map.set('page', page.toString());

    map.set('per_page', "5");
    return Object.fromEntries(map.entries());
}
const getIssues = async ({ state, labels = [], page = 1 }: issuesProps): Promise<Issue[]> => {

    await sleep(2);

    const params = getParams(state, labels, page);

    const { data } = await gitHubApi.get<Issue[]>('/issues', { params });

    return data;
}




export const useIssues = ({ state, labels }: issuesProps) => {
    const [page, setPage] = useState(1);

    const issuesQuery = useQuery({
        queryKey: ['issues', { state, labels, page }],
        queryFn: () => getIssues({ state, labels, page })
    });

    useEffect(() => { setPage(1) }, [labels, state])
    const nextPage = () => {
        if (issuesQuery.data?.length === 0) return;
        setPage(page + 1);
    }

    const prevPage = () => {
        if (page > 1) setPage(page - 1);
    }

    return {
        issuesQuery,

        page: issuesQuery.isFetching ? 'Loading...' : page,

        nextPage,

        prevPage
    }
}