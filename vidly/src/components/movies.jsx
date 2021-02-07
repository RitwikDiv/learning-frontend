import React, { Component } from "react";
import { getMovies, deleteMovie } from "../services/fakeMovieService";

class MovieTable extends Component {
  state = {
    movies: getMovies(),
  };

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id != movie._id);
    this.setState({ movies: movies });
  };

  render() {
    const { length: count } = this.state.movies;
    if (count === 0)
      return <p className="alert alert-danger">No movies in the database</p>;

    return (
      <main className="container">
        <table className="table table-hover">
          <caption>Movies in the database: {count}</caption>
          <thead className="thead-dark">
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">InStock</th>
              <th scope="col">Rate</th>
              <th scope="col">Operation</th>
            </tr>
          </thead>
          <tbody className="table-striped">
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    );
  }
}

export default MovieTable;
