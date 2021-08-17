import React from 'react';
import Proptypes from 'prop-types';

function Food(props){
  return(
    <>
      <h2>I love {props.fav}!</h2>
      <p>this food's score is {props.score}/5.0!</p>
    </>
  )
}

Food.propTypes={
  fav:Proptypes.string.isRequired,
  score:Proptypes.number.isRequired
};

const foodLike=[
  {
    id:1,
    fav:"apple",
    score:3.1
  },
  {
    id:2,
    fav:"samgiopsal",
    score:4.2
  },
  {
    id:3,
    fav:"orange",
    score:3.4
  }
]

function App() {
  return (
    <div>
      <h1>Hello!</h1>
      {foodLike.map(food=>{
        return <Food fav={food.fav} key={food.id} score={food.score}/>
      })}
    </div>
  );
}

export default App;
