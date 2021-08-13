import React from 'react';

function Food({hate, fav}){
  return(
    <div>
      <h2>I hate {hate}!</h2>
      <h2>I love {fav}!</h2>
    </div>
  )
}

const foodLike=[
  {
    id:1,
    fav:"apple",
    hate:"orange"
  },
  {
    id:2,
    fav:"samgiopsal",
    hate:"soju"
  }
]

function App() {
  return (
    <div>
      <h1>Hello!</h1>
      {foodLike.map(food=>{
        return <Food fav={food.fav} hate={food.hate} key={food.id}/>
      })}
    </div>
    //return <div className="App" />;
  );
}

export default App;
