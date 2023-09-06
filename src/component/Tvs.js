import React, { useEffect, useState } from 'react'

import {Link,BrowserRouter,Routes,Route} from 'react-router-dom';
import axios from 'axios'



function Tvs() {
    const [tvDataP, setTvDataP] = useState([]);
    const [tvDataT, setTvDataT] = useState([]);
    const [searchQuery, setSearchQuery] = useState(""); // 검색어를 저장할 상태
    const [more,setMore] = useState(1);
    
    
    

    const dbData = axios.create({
        baseURL: 'https://api.themoviedb.org/3',
        params: { api_key: 'f89a6c1f22aca3858a4ae7aef10de967' }
    })

// 트랜딩 티비
useEffect(function () {
    dbData
        .get('/tv/popular')
        .then((res) => {
            const tvTop = res.data;
            setTvDataP(tvTop.results);
        })
}, []);

// 탑 티비
useEffect(function () {
    dbData
        .get('/tv/top_rated')
        .then((res) => {
            const tvTop = res.data;
            setTvDataT(tvTop.results);
        })
}, []);

 // 검색어를 기반으로 TV 시리즈를 필터링하는 함수
const filtertv = (tvlar) => {
    if (searchQuery === "") {
      return tvlar; // 검색어가 없을 때는 모든 TV 시리즈 표시
    }
    return tvlar.filter((tv) =>
      tv.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

   //더보기 버튼 
   const morethigs = function(){
    const newCount = more + 1;
    dbData.get(`/tv/popular?page=${newCount}`)
    .then((res)=>{
        const moredata = res.data.results;
        setTvDataT([...tvDataP,...moredata]);
        setMore(newCount);
    })
}


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
                        filtertv(tvDataP).map((e) => (
                            <li key={e.id}>
                                <img src={`https://image.tmdb.org/t/p/w200${e.poster_path}`} />
                                <h3>{e.name}</h3>
                                <Link to ={`/tv/${e.id}`} className='click'>자세히보기</Link>
                            </li>
                        ))
                    }
                </ul>
            </section>


            <section className='tv'>

                <ul>
                    {
                         filtertv(tvDataT).map((e) => (
                            <li key={e.id}>
                                <img src={`https://image.tmdb.org/t/p/w200${e.poster_path}`} />
                                <h3>{e.name}</h3>
                                <Link to ={`/tv/${e.id}`} className='click'>자세히보기</Link>
                            </li>
                        ))
                    }
                </ul>
            <div>
            <button className='more'  onClick={morethigs}>Load more</button>
            </div>
            </section>

        </>
    );
};


export default Tvs