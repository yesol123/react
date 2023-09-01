import React, { useEffect, useState } from 'react'
import axios from 'axios'


function Tvs() {
    const [tvDataP, setTvDataP] = useState([]);
    const [tvDataT, setTvDataT] = useState([]);
    const [searchQuery,setSearchQuery] = useState("");
    

    const dbData = axios.create({
        baseURL: 'https://api.themoviedb.org/3',
        params: { api_key: 'f89a6c1f22aca3858a4ae7aef10de967' }
    })

    //트랜딩 티비
    useEffect(function () {
        dbData
            .get('/tv/popular')
            .then(res => {
                const tvTop = res.data;
                setTvDataP(tvTop.results);
            })
    })
    //탑 티비
    useEffect(function () {
        dbData
            .get('/tv/top_rated')
            .then(res => {
                const tvTop = res.data;
                setTvDataT(tvTop.results);
            })
    })

    //검색 
    const filterTv = (movies) =>{ 
        if(searchQuery === ""){
            return movies
        }
        return movies.filter((movies)=>
        movies.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
    };



    return (
        <>
            <h1>TV Series</h1>
            <section className='search'>
                <div>
                    <input type='text' placeholder='Enter keyword' 
                    value={searchQuery}
                    onChange={(e)=>setSearchQuery(e.target.value)}/>
                    <button onClick={()=>setSearchQuery("")}>search</button>
                </div>
            </section>
            <section className='tv'>

                <ul>
                    {
                        tvDataP.map((e) => (
                            <li key={e.id}>
                                <img src={`https://image.tmdb.org/t/p/w200${e.poster_path}`} />
                                <h3>{e.name}</h3>
                            </li>
                        ))
                    }
                </ul>
                    {filterTv(tvDataT).length}
            </section>


            <section className='tv'>

                <ul>
                    {
                        tvDataT.map((e) => (
                            <li key={e.id}>
                                <img src={`https://image.tmdb.org/t/p/w200${e.poster_path}`} />
                                <h3>{e.name}</h3>
                            </li>
                        ))
                    }
                </ul>
            </section>

        </>
    );
};


export default Tvs