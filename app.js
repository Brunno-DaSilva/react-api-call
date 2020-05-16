const MovieInfo = ({ movie }) => {
  const { Title, Year, Poster, Genre, Plot } = movie;
  return (
    <div>
      <h1>Title: {Title}</h1>
      <h2>Year: {Year}</h2>
      <img src={Poster} alt={Title} />
      <h3>Genre: {Genre}</h3>
      <h4>Plot: {Plot}</h4>
    </div>
  );
};

class OMDBQueryForm extends React.Component {
  state = {
    movieTitle: "",
    baseURL: "http://www.omdbapi.com/?",
    apikey: "apikey=" + "d009225a",
    query: "&t=",
    searchURL: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState(
      {
        searchURL:
          this.state.baseURL +
          this.state.apikey +
          this.state.query +
          this.state.movieTitle,
      },
      () => {
        console.log(this.state.searchURL);
        fetch(this.state.searchURL)
          .then((res) => {
            return res.json();
          })
          .then(
            (data) => {
              this.setState({
                movie: data,
                movieTitle: "",
              });
            },
            (err) => console.log(err)
          );
      }
    );
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="movieTitle">Title</label>
          <input
            id="movieTitle"
            type="text"
            value={this.state.movieTitle}
            onChange={this.handleChange}
          />
          <input type="submit" value="Find Movie Info" />
        </form>
        {this.state.movie && <MovieInfo movie={this.state.movie} />}
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return <OMDBQueryForm />;
  }
}

ReactDOM.render(<App />, document.querySelector(".root"));
