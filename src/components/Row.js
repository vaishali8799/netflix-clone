//import axios from 'axios';
import './Row.css'
import axios from '../utils/axios'
import React,{useState,useEffect} from 'react'
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer'

const Row = ({title,fetchUrl}) => {
    const baseUrl='https://image.tmdb.org/t/p/original/';
    const [movies, setmovies] = useState([]);
    const [trailer, setTrailer] = useState('');
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    }
    const handleTrailer = (movie) => {
        if (trailer) {
            setTrailer("");
        }
        else {
            movieTrailer(null,
                { tmdbId: movie.id, multi: true })
                .then(response => {
                    console.log(response[0])
                    // to extract video id from url (query string), use URL API 
                    const urlParams  = new URLSearchParams(new URL(response[0]).search);
                    setTrailer(urlParams.get("v"));}
                ).catch(err=>alert('Preveiw is not available'))
            
        }
    }
    useEffect(() => {
        axios.get(fetchUrl)
            .then(res => {
            console.log(res.data.results)
            setmovies(res.data.results)
        })
        .catch(err=>console.log(err))
    }, [fetchUrl])
    return (
        <div className="row__container">
            <h1>{title}</h1>
            <div className="row__img ">
            
                {movies.map(movie => (movie.poster_path && (
                    <div className="tooltip">
                    <span class="tooltiptext">Click to Preview</span>
                    <img className="row_img"
                        key={movie.id}    
                        src={`${baseUrl}${movie.poster_path}`}
                        alt={movie.name}
                            onClick={() => handleTrailer(movie)}></img>
                        </div>)
                ))}
               </div>
            {trailer && <YouTube videoId={trailer} opts={opts} />}
        </div>
    )
}

export default Row
// movieTrailer( 'Oceans Eleven', {year: '1960', multi: true} )
//   .then( response => console.log( response ) )