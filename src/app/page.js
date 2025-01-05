import Results from "@/components/Results";
import { tmbdConfig } from "./lib/config";

const Home = async ({ searchParams }) => {
  const genre = (await searchParams).genre || "fetchTrending";
  const res = await fetch(
    `${tmbdConfig.endPointUrl}${genre === "fetchTopRated" ? "/movie/top_rated" : "/trending/movie/week"}?api_key=${tmbdConfig.apiKey}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const { results } = data;

  return (
    <div>
      <Results results={results} />
    </div>
  );
};
export default Home;
