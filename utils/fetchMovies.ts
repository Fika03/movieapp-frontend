export const fetchMovies = async () => {
  const res = await fetch("https://movie-app-api-server.vercel.app/movies");

  const data = res.json();

  return data;
};
