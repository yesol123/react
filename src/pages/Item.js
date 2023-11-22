import React from 'react'
import {Link} from 'react-router-dom'



function Item({data}) {
  return (
    <>
    {
        data.map((item,k)=>(

            <div key={item.id}>
            <h2> {item.name} </h2> 
            <img src={item.thumb} alet="" /> 
            <Link to = {`/ParamItem/${item.id}`}> 자세히보기 </Link>
            </div>
            

        ))
    }
    </>
  )
}

export default Item