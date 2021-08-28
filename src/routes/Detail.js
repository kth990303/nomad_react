import React from 'react';

function Detail(props){
    console.log(props.location.state);
    const year=props.location.state.year;
    let flag;
    if(year<=2010){
        flag="주의: 개봉한지 10년이 넘은 옛날 영화입니다.";
    }
    const title=props.location.state.title;
    return(
       <div>
           <h1>{title}</h1>
           <h2>개봉: {year}년</h2>
           <p style={{color: "red"}}>{flag}</p>
       </div>
    )
}

export default Detail;
