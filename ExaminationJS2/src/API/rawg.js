import { RAWG_API_KEY, RAWG_BASE_URL } from "./rawgConfig";

export async function fetchGames({ queryKey }) {
  const [_key, page, search] = queryKey;

  const url =
    `${RAWG_BASE_URL}/games?key=${RAWG_API_KEY}` +
    `&page_size=20&page=${page}` +
    (search ? `&search=${encodeURIComponent(search)}` : "");

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Kunde inte hämta spel");
  }

  return res.json();
}
