export interface IMovie {
  imdbID: string;
  Title: string;
  Type: "movie" | "series" | "game";
  Poster: string;
  price: number;
  amount: number;
  Year: string;
  Description: string | "test";
}
