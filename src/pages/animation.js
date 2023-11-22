const txt = {
    init: {scale:2,x:1000,opacity:0},
    play: {scale:1,x:0,opacity:1,transition:{duration:4},type:'spring'}
}

const txt2 = {
    init: {scale:5, rotate:360},
    play: {scale:1, rotate:0}
}


export {txt,txt2};

//export default txt; 
//하나만 내보낼때 꼭 default 두개라면 default 빼면 됨~ 두개일시 예시 ) export {txt,txt2}
//갯수에 상관없이 몽땅 다 붙이고 싶다면
// import *as all from './animation' 으로 사용