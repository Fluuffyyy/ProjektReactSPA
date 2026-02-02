import { useQuery } from "@tanstack/react-query";
import { fetchGames } from "../API/rawg";

export function useGames(page, search) {
  return useQuery({
    queryKey: ["games", page, search],
    queryFn: fetchGames,
    keepPreviousData: true,
  });
}
