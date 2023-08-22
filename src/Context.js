import axios from 'axios';
import {createContext, useEffect, useReducer} from 'react'
export const MyContext = createContext();

const reducer = (state,action) => {
    switch(action.type){
        case 'post' : return [...state,action.d];
        case 'put' : return state.map(obj =>{ 
            if(obj.id == action.d.id){
                obj.price = action.d.price;
                obj.msg = action.d.msg;
                obj.date = action.d.date; //기존 값 = 신규값
            }   
            return obj;
        });
        case 'del' : return state.filter(obj => obj.id != action.d);
        default : return action.d; 
    }
}
function Context({children}) {
    const [data,dispatch] = useReducer(reducer,[]);



    // const fetchFn= ()=>{
    //     axios.get('http://localhost:3030/history')
    //     .then(res=>{ //데이터를 제이슨에 요청하고. res : 제이슨파일을 가지고 있는 것이 아니라
    //         dispatch({type:'get', d:res.data}) //이 데이터를 get타입으로 d에다 넣겠다 
    //     })
    // }

    const instance = axios.create({
        baseURL: 'http://localhost:3030/history'
      });

    const fetchFn = async (type,data) => {  //타입이 데이터로 들어감
        let res; // await반환값이 나올 때까지 기다려 줌 
        
        switch(type){ //함수를 실행시키는 시점에 put,del같은 것들을 인자값으로 넘겨줌
            case 'post' :
                
                res = await instance.post('/',data); // data의 형태: 객체
                break;
            case 'put' :
                res = await instance.put(`/${data.id}`,data);
                break;
            case 'del' : 
                res = await instance.delete(`/${data}`); // /내가삭제시키고 싶은 번호
                
                res = {data};
                break;
            default : 
                res = await instance.get('/'); 
        }
        dispatch({type,d:res.data}) //키와 값이 동일할 경우 하나만 적을 수 있음 가져온 데이터를 변수에 저장시킴
    } 



    useEffect(()=>{
        
        fetchFn('get') 
    },[]) //의존성배열은.. 한번만 실행시켜준다? 

    
  return (
    <MyContext.Provider value={{data,fetchFn}}>
        {children}
    </MyContext.Provider>
  )
}

export default Context