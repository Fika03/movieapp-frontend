export const fetchXMovies = async (page = 1) => {
  const res = await fetch(
    `https://movie-app-api-server.vercel.app/movies/page/${page}`
  );

  const data = res.json();

  return data;
};
