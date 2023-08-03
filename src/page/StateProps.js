import { useState } from 'react';

function StateProps({data,name}) {
    console.log(data,name)
    const[count,setCount] =useState(0);
    
    
    
    function plus(){
        setCount(count + 1);
    }
    

    return (
        <>
        <h2>Props</h2> 
        *부모컨퍼넌트에서 자식컨포넌트로 값을 보내줄 때 사용<br />
        *&#60;'자식컨포넌트 속성='값'/&#62;<br />
        *function 자식(<b>props</b>) &#123;<br />
        console.log(props)    //<b>&#123;속성:'값'&#125;</b> <br />  
        &#125;<br />

        <h2>State</h2>
        <button onClick={plus}> {count} </button><br />
        *useSate()// 상태[값,값수정함수]<br />
        *값 수정함수를 이용해서 값을 수정하면 컨포넌트 자체내에 렌더링 발생<br />
        *렌더링 발생시 바뀐값이 실체 dom에 적용됨
        


        </>
    )
}

export default StateProps