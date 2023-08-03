
import logo from '../logo.svg';

function Image() {
  return (
    <>
          
    *폴더 안에 있는 이미지 출력
    <img src ={logo}  />
    
    *public폴더 안에 있는 이미지 출력 
    <img src ="./logo512.png" />

    </>
  )
}

export default Image