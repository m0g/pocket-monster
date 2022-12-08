async function fetchGraphQL(text: string) {
  const response = await fetch("https://dex-server.loicnogu.es", {
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
