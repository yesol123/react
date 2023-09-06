import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';

function Detail() {

    const [data,setData]=useState([]);
    const {id,type} = useParams()

    console.log(type,id);

    const dbData = axios.create({
        baseURL : `https://api.themoviedb.org/3/${type}/${id}`,
        params: { api_key: 'f89a6c1f22aca3858a4ae7aef10de967'}
    })

    useEffect(()=>{
        dbData.get('')
        .then(res=>{
            setData(res.data)
        })
    },[])
    console.log(data);

    if(data && data.length <= 0) return <></>; // data 값이 비었을 때 빈 페이지를 넣어준다. map이 먼저 함수를 실행하는 이슈로 인한 문제 

  return (

    <>
    
    <div className='detailshow'>
        <section>
        <figure>
            <img src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}/>
        </figure>
        <div>
        <h1>{ type == 'movie' ? data.title : data.name}</h1>
            {
                data.genres.map((v)=>(
                    <span>{v.name}</span>
                ))
            }
            <p>{data.overview}</p>
            <p className='runtime' >{type=='movie' ? `popularity:` :`episode run time:`} { type=='movie' ? data.popularity : data.episode_run_time}</p>
        </div>
        </section>
    </div>


    
    </>

  )
}

export default Detail