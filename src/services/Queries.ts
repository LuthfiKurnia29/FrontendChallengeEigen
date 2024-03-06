import { useQuery } from "@tanstack/react-query";
import { getAll } from "./Api";

export function allNews() {
  return useQuery({
    queryKey: ['All'],
    queryFn: getAll
  });
}
