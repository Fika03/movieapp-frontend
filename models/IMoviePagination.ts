import { IMovie } from "./IMovie";

export interface IMoviePagination {
  movies: IMovie[];
  totalPages: number;
}
