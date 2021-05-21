import React from 'react'
import requests from '../utils/requests';
import Banner from './Banner';
import Nav from './Nav';
import Row from './Row'

const Home = () => {
    return (
        <div>
            <Nav />
            <Banner />
            <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} />
            <Row title="Trending" fetchUrl={requests.fetchTrending} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated }/>
            <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies} />
            <Row title="Action Movies " fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Sci-Fi Movies" fetchUrl={requests.fetchSciFiMovies} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries }/>
        </div>
    )
}

export default Home
