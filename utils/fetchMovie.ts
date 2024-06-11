export const fetchMovie = async (id: string) => {
  const res = await fetch(
    "https://movie-app-api-server.vercel.app/movie/" + id
  );

  const data = res.json();

  return data;
};
