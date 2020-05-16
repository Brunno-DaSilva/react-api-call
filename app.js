class App extends React.Component {
  state = {
    baseURL: "http://www.omdbapi.com/?",
    apikey: "apikey=" + "98e3fb1f",
    query: "&t=",
    movieTitle: "",
    searchURL: "",
  };

  render() {
    return (
      <div>
        <form>
          <label htmlFor="movieTitle">Title</label>
          <input
            id="movieTitle"
            type="text"
            value={this.state.movieTitle}
            onChange={this.handleChange}
          />
          <input type="submit" value="Search for a Movie" />
        </form>
        <a href={this.state.searchURL}>{this.state.searchURL}</a>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".root"));
