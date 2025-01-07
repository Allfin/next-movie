import { tmbdConfig } from "@/app/lib/config";
import Results from "@/components/Results";

export default async function SearchPage({ params }) {
  const searchTerm = (await params).searchTerm;
  const res = await fetch(
    `${tmbdConfig.endPointUrl}/search/movie?api_key=${tmbdConfig.apiKey}&query=${searchTerm}&language=en-US&page=1&include_adult=false`
  );
  const data = await res.json();
  const results = data.results;
  console.log("res: ", res);
  console.log("searchTerm: ", searchTerm);
  console.log("data: ", data);
  return (
    <div>
      {results &&
        results.length ===
        <h1 className="text-center pt-6">No results found</h1>}
      {results && <Results results={results} />}
    </div>
  );
}
