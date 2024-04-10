import { useQuery } from "@tanstack/react-query";
import { gitHubApi } from "../../api/githubApi";
import { Label } from "../models/label.model";
import { sleep } from "../../../helpers/sleep";

const getLabels = async (): Promise<Label[]> => {
  await sleep(1);
  const res = await gitHubApi.get<Array<Label>>('/labels');
  console.log(res.data);
  return res.data
}

const getPlaceholderData = (): Label[] => {

  return [
    {
      id: 69105383,

      node_id: "MDU6TGFiZWw2OTEwNTM4Mw ==",

      url: "https://api.github.com/repos/facebook/react/labels/Browser:%20IE",

      name: "Browser: IE",

      color: "c7def8",

      default: false,

    },
    {
      id: 69105358,

      node_id: "MDU6TGFiZWw2OTEwNTM1OA==",

      url: "https://api.github.com/repos/facebook/react/labels/Browser:%20Safari",

      name: "Browser: Safari",

      color: "c7def8",

      default: false,

    }
  ]
};
export const getInitialData = (): Label[] => {

  return getPlaceholderData()
}

export const useLabels = () => {

  const labelsQuery = useQuery(
    {
      queryKey: ['labels'],
      queryFn: getLabels,
      staleTime: 1000 * 60 * 60,
      placeholderData: getPlaceholderData(),
      //initialData: getInitialData()
    }
  )
  return {
    labelsQuery
  }
}