import React,{useEffect,useState} from 'react'
import './Banner.css'
import axios from '../utils/axios'
import requests from '../utils/requests'
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer'

const Banner = () => {
    const baseUrl='https://image.tmdb.org/t/p/original/';
    const [movie, setmovie] = useState([]);
    const [trailer, setTrailer] = useState("")
    const handleTrailer = (movie) => {
        if (trailer) {
            setTrailer("");
        }
        else {
            movieTrailer(null,
                { tmdbId: movie.id, multi: true })
                .then(response => {
                    console.log(response)
                    // to extract video id from url (query string), use URL API 
                    const urlParams  = new URLSearchParams(new URL(response).search);
                    setTrailer(urlParams.get("v"));}
                ).catch(err=>alert('Preveiw is not available'))
            
        }
    }
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {

            autoplay: 1,
        },
    }
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

    return (
        <>
        <header className="banner" style={{
            backgroundImage: `url("${baseUrl}${movie.backdrop_path}")`,
            backgroundSize:'100% 80vh',
            backgroundPosition: 'center',
            
        }}> <div  style={{background:'rgba(0,0,0,0.5)',height:'80vh'}}>
            <div className="banner__content">
                <h1 className="movie__title">{ movie.name}</h1>
                <h5 className="movie__desc">{cut(movie.overview,150)}</h5>
                <div className="banner__buttons">
                    <button className="banner__button"onClick={()=>{handleTrailer(movie)}}>Play</button>
                    <button className="banner__button">More Info</button>
                </div>
            </div>
            </div>
        </header>
         { trailer && <YouTube videoId={trailer} opts={opts} /> }
    </>
    )
}

export default Banner
