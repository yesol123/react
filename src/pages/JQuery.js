import React, { useEffect } from 'react'
import $ from 'jquery'

function JQuery() {
  function test(){
    $('.txt').css('color','red');
  }
  useEffect(test,[])

  return (
    <article>
        <h2>JQuery</h2>
        <div className='txt'>
            npm install jquery <br/>
            ㄴ import $ from 'jquery'
        </div>
    </article>
  )
}


export default JQuery