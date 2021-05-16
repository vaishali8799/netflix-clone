//import axios from 'axios';
import './Row.css'
import axios from '../utils/axios'
import React,{useState,useEffect} from 'react'

const Row = ({title,fetchUrl,isLarge=false}) => {
    const baseUrl='https://image.tmdb.org/t/p/original/';
    const [movies, setmovies] = useState([]);
    useEffect(() => {
        axios.get(fetchUrl)
        .then(res=>{console.log(res.data.results)
            setmovies(res.data.results)
        })
        .catch(err=>console.log(err))
    }, [fetchUrl])
    return (
        <div className="row__container">
            <h1>{title}</h1>
            <div className="row__img" >
                {movies.map(movie=>(movie.poster_path &&(
                    <img className="row_img"
                        src={`${baseUrl}${movie.poster_path}`}
                        alt={movie.name}
                        key={movie.id}></img>)
                ))}
            </div>
        </div>
    )
}

export default Row
