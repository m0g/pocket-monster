// your-app-name/src/fetchGraphQL.js
async function fetchGraphQL(text: string) {
  // Fetch data from GitHub's GraphQL API:
  const response = await fetch("http://localhost:4000", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: text,
    }),
  });

  // Get the response as JSON
  const json = await response.json();

  return json.data;
}

export default fetchGraphQL;
