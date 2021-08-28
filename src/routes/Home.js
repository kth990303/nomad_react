import axios from 'axios';
import React from 'react';
import Movie from '../components/movie';

class Home extends React.Component{
  state={
    isLoading: true,
    movies: []
  };
  getMovies=async ()=>{
    const {
      data: {
        data: { movies }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    this.setState({movies, isLoading: false});
  };
  componentDidMount(){
    this.getMovies();
  }
  render(){
    const {isLoading, movies}=this.state;
    return(
      <section className="container">
        {isLoading? (
        <div class="loader">
          <span class="loader__text_">Loading...</span>
        </div>
        ) : (
          <div class="movie">
            <h1>Currently Most popular Movies List</h1>
            <hr></hr>
            {
              movies.map(movie => {
                return <Movie 
                key={movie.id}
                id={movie.id}
                year={movie.year} 
                title={movie.title} 
                summary={movie.summary} 
                poster={movie.medium_cover_image}
                genres={movie.genres}
                />
              })}
          </div>
        )}
      </section>
    )
  }
}

export default Home;