import { createContext, useReducer } from "react"
const MyContect = createContext();


const reducer = (state,action) => {
  switch(action.type){
    case 'insert' : return [...state,action.data]; // insert 타입으로 d라는 객체를 보냈는데 ~~ 
    case 'delete' : return state.filter(obj => obj.id != action.id); //조건이 true일 경우 헤당 obj 값을 return시킴 obj값 반환시켜줌
  // swich문  case에 해당되지 않을 때 default : return state; 기존값을 그대로 return 시키는 것 
  }
} //reducer는 매개변수가 2개입니다. 실제데이터 state , 삭제 등 요청을 처리할 수 있는 데이터를 담고 있는 action


function Context({children}) {
  const [data,dispatch] = useReducer(reducer,[]); //useReducer(함수,[])형태로 작성 안에 있는 함수가 일처리~~ 하면 [실제적데이터 (state):배열]가 변경됩니다
  console.log(data);
  //dispath도 함수 ! 

    return (
     <MyContect.Provider value={{data,dispatch}}> 
        {children}
    </MyContect.Provider>
  )
}

export { MyContect, Context }