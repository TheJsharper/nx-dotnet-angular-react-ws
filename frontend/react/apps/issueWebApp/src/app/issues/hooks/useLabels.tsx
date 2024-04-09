import { useQuery } from "@tanstack/react-query";
import { gitHubApi } from "../../api/githubApi";
import { Label } from "../models/label.model";

const getLabels = async (): Promise<Label[]> => {

    const res = await gitHubApi.get<Array<Label>>('/labels');
    console.log(res.data);
    return res.data
  }


export const useLabels = ()=>{

    const labelsQuery = useQuery(
        {
          queryKey: ['labels'],
          queryFn: getLabels
        }
      )
      return {
        labelsQuery
      }
}