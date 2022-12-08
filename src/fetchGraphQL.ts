const apiUrl =
  import.meta.env.MODE === "production"
    ? "https://dex-server.herokuapp.com"
    : "http://localhost:4000";

async function fetchGraphQL(text: string) {
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: text,
    }),
  });

  const json = await response.json();

  return json.data;
}

export default fetchGraphQL;
