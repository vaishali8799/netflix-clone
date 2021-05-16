import React,{useEffect,useState} from 'react'
import './Banner.css'
import axios from '../utils/axios'
import requests from '../utils/requests'

const Banner = () => {
    const baseUrl='https://image.tmdb.org/t/p/original/';
    const [movie, setmovie] = useState([]);
    const cut = (s, n) => {
        if (s) {
            if (s.length > n) {
                return s.substr(0, n) + '....';
            }
            else {
                return s;
            }
        }
    }
    useEffect(() => {
        axios.get(requests.fetchNetflixOriginals)
            .then(res => {
              
                setmovie(res.data.results[Math.floor(Math.random()*res.data.results.length)])
    })
        
    }, [])
    console.log(movie)
    return (
        <header className="banner" style={{
            backgroundImage: `url("${baseUrl}${movie.backdrop_path}")`,
            backgroundSize:'100% 80vh',
            backgroundPosition:'center'
        }}>
            <div className="banner__content">
                <h1 className="movie__title">{ movie.name}</h1>
                <h5 className="movie__desc">{cut(movie.overview,150)}</h5>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">More Info</button>
                </div>
            </div>
        </header>
    )
}

export default Banner
