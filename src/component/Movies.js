import React from 'react'
import { useEffect, useState} from 'react';
import {Link,BrowserRouter,Routes,Route} from 'react-router-dom';
import axios from 'axios'
import Detail from './Detail';


function Movies() {


    const [movieDataP, setMovieDataP] = useState([]);
    const [movieDataT, setMovieDataT] = useState([]);
    const [searchQuery,setSearchQuery] = useState("");
    const [more,setMore] = useState(1);
    

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



    //검색어를 기반으로 Movie를 필터링 하는 함수 
    const filtermovie = (movies) => {
        if(searchQuery === ""){
            return movies; // 검색어가 없을 땐 모든 movie를 표시
        }
        return movies.filter((movie)=>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
    };


    //더보기 버튼 
    const morethigs = function(){
        const newCount = more + 1;
        dbData.get(`/movie/popular?page=${newCount}`)
        .then((res)=>{
            const moredata = res.data.results;
            setMovieDataT([...movieDataP,...moredata]);
            setMore(newCount);
        })
    }

    return (
        <>
            <h1>Movies</h1>
            <section className='search'>
                <div>
                    <input type="text" 
                    placeholder='Enter keyword' value={searchQuery}
                    onChange={(e)=>setSearchQuery(e.target.value)} />
                    <button onClick={()=>setSearchQuery("")}>search</button>
                </div>
            </section>
            <section className='movie'>
                <ul>
                    {
                        filtermovie(movieDataP).map((e) => (
                            <li key={e.id}>
                                <img src={`https://image.tmdb.org/t/p/w200${e.poster_path}`} />
                                <h3>{e.title}</h3>
                                <Link to ={`/movie/${e.id}`} className='click'>자세히보기</Link>
                            </li>
                        ))
                    }
                </ul>
            </section>

            <section className='movie'>

                <ul>
                    {
                        filtermovie(movieDataT).map((e) => (
                            <li key={e.id}>
                                <img src={`https://image.tmdb.org/t/p/w200${e.poster_path}`} />
                                <h3>{e.title}</h3>
                                <Link to ={`/movie/${e.id}`} className='click'>자세히보기</Link>
                            </li>
                        ))
                    }
                </ul>
            <div>
            <button className='more' onClick={morethigs}>Load more</button>
            </div>
            </section>
        </>
    )
}

export default Movies

