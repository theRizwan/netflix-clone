import requests from "../api/Request";
import Banner from "../components/Banner/Banner";
import Nav from "../components/Nav/Nav";
import Row from "../components/Row/Row";

function HomeScreen() {
  return (
    <>
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINAL"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
      />

      <Row title="TRENDING NOW" fetchURL={requests.fetchTrending} />
      <Row title="TOP RATED" fetchURL={requests.fetchTopRated} />
      <Row title="ACTION MOVIES" fetchURL={requests.fetchActionMovies} />
      <Row title="COMEDY MOVIES" fetchURL={requests.fetchComedyMovies} />
      <Row title="HORROR MOVIES" fetchURL={requests.fetchHorrorMovies} />
      <Row title="ROMANCE MOVIES" fetchURL={requests.fetchRomanceMovies} />

      <Row title="DOCUMENTARIES" fetchURL={requests.fetchDocumentaries} />
    </>
  );
}

export default HomeScreen;
