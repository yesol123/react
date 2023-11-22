import React, { useEffect } from 'react'

function Scroll() {

  let inter = () => {
    const elScroll = document.querySelector('.scroll');

    HTMLCollection.prototype.forEach = Array.prototype.forEach;
    //없는 기능을 추가해서 사용할 때 쓴다. htmlcollection에 foreach기능 추가

    elScroll.children.forEach((el)=>{
      if(el.offsetTop < window.pageYOffset + Window.innerHeight){
        el.classList.add('active');
      }
    })

    
    elScroll.children.forEach((el)=>{
      console.log(el.offsetTop);
    })
  }

  useEffect(()=>{
    //mountiong 
    window.addEventListener('scroll',inter)


    return() =>{
      console.log('unmounting')
      window.removeEventListener('scroll',inter) //해당 컴포넌트를 벗어나면 스크롤 이벤트 없어짐! 특정 컴포넌트에만 이벤트를 발생시키고 싶다면 이 방법을 꼭 사용해줘야함
    }
  },[])




  return (

   <>
    <h2> scroll</h2>
    <div className='scroll'>
      <figure>망고</figure>
      <figure>딸기</figure>
      <figure>오렌지</figure>
      <figure>체리</figure>
      <figure>수박</figure>
      <figure>키위</figure>
    </div>
   </>
  )
}

export default Scroll