import React, { useRef,useEffect, useState  } from 'react'
import axios from 'axios'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';



// import required modules
import { FreeMode, Pagination } from 'swiper/modules';


export default function List() {
    const [movieDataP, setMovieDataP] = useState([]);
    const [movieDataT, setMovieDataT] = useState([]);
    const [tvDataP,setTvDataP] =useState([]);
    const [tvDataT,setTvDataT] =useState([]);



    const dbData = axios.create({
        baseURL: 'https://api.themoviedb.org/3',
        params: {api_key:'f89a6c1f22aca3858a4ae7aef10de967'}
    })




    //트랜딩 무비
    useEffect(function(){
        dbData
        .get('/movie/popular')
        .then(res=>{
            const moviePop = res.data;
            setMovieDataP(moviePop.results);
        })
    },[])
    //탑 무비
    useEffect(function(){
        dbData
        .get('/movie/top_rated')
        .then(res=>{
            const movieTop = res.data;
            setMovieDataT(movieTop.results);
        })
    },[])
    //트랜딩 티비
    useEffect(function(){
        dbData
        .get('/tv/popular')
        .then(res=>{
            const tvTop = res.data;
            setTvDataP(tvTop.results);
        })
    })
    //탑 티비
    useEffect(function(){
        dbData
        .get('/tv/top_rated')
        .then(res=>{
            const tvTop = res.data;
            setTvDataT(tvTop.results);
        })
    })




    return (
        <>

        <section className='movie'>
            <h2>Trending Movies</h2>
            <Swiper  slidesPerView={7} spaceBetween={5}  centeredSlides={false}>
            <ul className='mySwiper'>
                {
                    movieDataP.map((e)=>(
                        <SwiperSlide>
                        <li key={e.id}>
                            <img src={`https://image.tmdb.org/t/p/w200${e.poster_path}`}/>
                            <h3>{e.title}</h3>
                        </li>
                    </SwiperSlide>
                    ))
                }
            </ul>
            </Swiper>
        </section>

        <section className='movie'>
            <h2>Top Rated Movies</h2>
            <Swiper  slidesPerView={7} spaceBetween={5}  centeredSlides={false}>
            <ul>
                {
                    movieDataT.map((e)=>(
                        <SwiperSlide>
                        <li key={e.id}>
                            <img src={`https://image.tmdb.org/t/p/w200${e.poster_path}`}/>
                            <h3>{e.title}</h3>
                        </li>
                        </SwiperSlide>
                    ))
                }
            </ul>
            </Swiper>
        </section>


        <section className='tv'>
            <h2>Trending Tv</h2>
            <Swiper  slidesPerView={7} spaceBetween={5}  centeredSlides={false}>
            <ul>
                {
                    tvDataP.map((e)=>(
                        <SwiperSlide>
                        <li key={e.id}>
                            <img src={`https://image.tmdb.org/t/p/w200${e.poster_path}`}/>
                            <h3>{e.name}</h3>
                        </li>
                        </SwiperSlide>
                    ))
                }
            </ul>
            </Swiper>
        </section>


        <section className='tv'>
            <h2>Top Rated Tv</h2>
            <Swiper  slidesPerView={7} spaceBetween={5}  centeredSlides={false}>
            <ul>
                {
                    tvDataT.map((e)=>(
                        <SwiperSlide>
                        <li key={e.id}>
                            <img src={`https://image.tmdb.org/t/p/w200${e.poster_path}`}/>
                            <h3>{e.name}</h3>
                        </li>
                        </SwiperSlide>
                    ))
                }
            </ul>
            </Swiper>
        </section>
        
        <footer>
            
            <section>
                <div>
                <a>YFLIX</a>
                </div>
            
            <ul>
                <li><a>Home</a></li>
                <li><a>Live</a></li>
                <li><a>You must watch</a></li>
                <li><a>Contact us</a></li>
                <li><a>FAQ</a></li>
                <li><a>Recent release</a></li>
                <li><a>Term of services</a></li>
                <li><a>Premium</a></li>
                <li><a>Top IMDB</a></li>
                <li><a>About</a></li>
                <li><a>Pravacy policy</a></li>
            </ul>
            </section>
        </footer>
        </>
    )}