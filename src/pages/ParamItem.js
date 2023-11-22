import React from 'react'
import {useParams} from 'react-router-dom'

function ParamItem({data}) {
const {code} = useParams();
console.log(code)
  let detail = data.filter(k => k.id === code);
    return (
        <>
        <div>
        <h2>{detail[0].name}</h2>
        <p>가격:{detail[0].price}원</p>
        <p><img src={`../${detail[0].thumb}`} alt="" /></p>
        <p>{detail[0].say}</p>
        </div>
        </>
    )
}

export default ParamItem