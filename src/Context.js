import axios from 'axios';
import {createContext, useEffect, useReducer} from 'react'
export const MyContext = createContext();

const reducer = (state,action) => {
    switch(action.type){
        case 'insert' : return;
        case 'modify' : return;
        case 'del' : return;
        default : return action.d; 
    }
}
function Context({children}) {

    const [data,dispatch] = useReducer(reducer,[]);

    const fetchFn= ()=>{
        axios.get('http://localhost:3030/history')
        .then(res=>{ //데이터를 제이슨에 요청하고. res : 제이슨파일을 가지고 있는 것이 아니라
            dispatch({type:'get', d:res.data}) //이 데이터를 get타입으로 d에다 넣겠다 
        })
    }

    console.log(data);

    useEffect(()=>{
        fetchFn()
    },[]) //의존성배열은.. 한번만 실행시켜준다? 

    
  return (
    <MyContext.Provider value={data}>
        {children}
    </MyContext.Provider>
  )
}

export default Context