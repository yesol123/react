import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios'

function Movies() {


    const [movieDataP, setMovieDataP] = useState([]);
    const [movieDataT, setMovieDataT] = useState([]);
    
    
        const dbData = axios.create({
            baseURL: 'https://api.themoviedb.org/3',
            params: { api_key: 'f89a6c1f22aca3858a4ae7aef10de967' }
        })



    //트랜딩 무비
    useEffect(function () {
        dbData
            .get('/movie/popular')
            .then(res => {
                const moviePop = res.data;
                setMovieDataP(moviePop.results);
            })
    }, [])
    //탑 무비
    useEffect(function () {
        dbData
            .get('/movie/top_rated')
            .then(res => {
                const movieTop = res.data;
                setMovieDataT(movieTop.results);
            })
    }, [])

    return (
        <>
            <h1>Movies</h1>
            <section className='search'>
                <div>
                    <input type="text" 
                    placeholder='Enter keyword' />
                    <button>search</button>
                </div>
            </section>
            <section className='movie'>
                <ul>
                    {
                        movieDataP.map((e) => (
                            <li key={e.id}>
                                <img src={`https://image.tmdb.org/t/p/w200${e.poster_path}`} />
                                <h3>{e.title}</h3>
                            </li>
                        ))
                    }
                </ul>
            </section>

            <section className='movie'>

                <ul>
                    {
                        movieDataT.map((e) => (
                            <li key={e.id}>
                                <img src={`https://image.tmdb.org/t/p/w200${e.poster_path}`} />
                                <h3>{e.title}</h3>
                            </li>
                        ))
                    }
                </ul>
            </section>
        </>
    )
}

export default Movies