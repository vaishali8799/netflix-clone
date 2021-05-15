import React,{useEffect,useState} from 'react'
import './Banner.css'
import axios from '../utils/axios'
import requests from '../utils/requests'

const Banner = () => {
    const baseUrl='https://image.tmdb.org/t/p/original/';
    const [movie, setmovie] = useState([]);
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
            backgroundSize:'cover',
            backgroundPosition:'center'
        }}>
            <div className="banner__content">
                <h1 className="movie__title">{ movie.name}</h1>
                <h5 className="movie__desc">{movie.overview}</h5>
                <div className="banner__buttons">
                    <button>Play</button>
                    <button>More Info</button>
                </div>
            </div>
            <div className="fade__bottom"/>
        </header>
    )
}

export default Banner
