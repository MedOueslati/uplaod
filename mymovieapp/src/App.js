import React, { useState,useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MoviesList from "./MoviesList";
import MovieListHeading from "./MovieListHeading";
import Search from "./Search";



function App() {
  const [searchValue, setSearchValue] = useState('');
  const [movies,setMovies] = useState([
    {
      title: "Shanty Town",
      year: "2023",
      type: "Series",
      description:
        " testsssssssdqsddsqdqsdqsdsqdsqdqsdsqdsqdsqdsqdsqdsqdsqdqsdsqdqsd",
      rate: "8.2",
      poster:
        "https://m.media-amazon.com/images/M/MV5BZjEyNjVkMmEtZWFmYy00MDE5LThmZTUtYmE4N2Q5MDRkMmE4XkEyXkFqcGdeQXVyMTUzOTcyODA5._V1_SX300.jpg",
    },
    {
      title: "The Inmate",
      year: "2018–",
      type: "Series",
      rate: "12.9",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTUyNzc1YWMtZjY0Yi00MGE0LThiODYtZWRlZTgwYTRiNDM0XkEyXkFqcGdeQXVyMjQ2MDQwNDU@._V1_SX300.jpg",
    },
    {
      title: "John Wick: Chapter 4",
      year: "2023",
      type: "Movie",
      rate: "10.2",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMDExZGMyOTMtMDgyYi00NGIwLWJhMTEtOTdkZGFjNmZiMTEwXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SX300.jpg",
    },
    {
      title: "Prison Break",
      year: "2005–2017",
      type: "series",
      rate : "18.3",
      poster: "https://m.media-amazon.com/images/M/MV5BMTg3NTkwNzAxOF5BMl5BanBnXkFtZTcwMjM1NjI5MQ@@._V1_SX300.jpg"
  },
  {
    title: "Day of the Dead: Bloodline",
    year: "2017",
    type: "movie",
    rate:'10.3',
    poster: "https://m.media-amazon.com/images/M/MV5BMjE2MTg1NDQ2MF5BMl5BanBnXkFtZTgwMDkxMzMzNDM@._V1_SX300.jpg"
},
  ]);
  const getMovieRequest = async (searchValue) => {
		const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=f9d6390`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);
  

  return (
    <div className="container-fluid ">
      <div className="row d-flex align-items-center mt-4 mb-4">
      <MovieListHeading heading="Movies" />
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
        <MoviesList movies={movies} />
        
    </div>
    </div>

  );
}

export default App;
