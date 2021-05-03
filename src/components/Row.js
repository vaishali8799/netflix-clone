//import axios from 'axios';
import axios from '../utils/axios'
import React,{useState,useEffect} from 'react'

const Row = ({title,fetchUrl}) => {
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
        <div>
            <h1>{title}</h1>
            <div >
                {movies.map(movie=>(
                    <img style=
                    {{height:'200px',width:'200px'}}src={`${baseUrl}${movie.poster_path}`} alt={movie.name}></img>
                ))}
            </div>
        </div>
    )
}

export default Row
