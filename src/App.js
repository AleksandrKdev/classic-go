import grid from './grid1.svg';
import screen1 from './screen1.svg';
import screen2 from './screen2.svg';
import screen3 from './screen3.svg';
import googlePlay from './google-play.svg';
import appStore from './app-store.svg';
import './App.css';
import React from 'react';

const text1 = "Go is an abstract strategy board game for two players, the goal of which is to capture more territory than the opponent by fencing off empty space. The game was invented in China over 2,500 years ago and is considered the oldest board game that is still played today. A 2016 survey of 75 member countries of the International Go Federation found that there are more than 46 million people worldwide who know how to play Go and more than 20 million current players, most of whom live in East Asia."
const text2 = "In this client, only the “boehmi” time control was used.";

function App() {
  return (
    <div className="App">
      <div class="wrapper">
	<figure>
  <img src={grid} className="grid" alt="grid" />
	</figure>
</div>
      <section className="App-header">
        <p className='text'>
          <span className="go">Go</span>
          <span className='classic'>classic</span>
        </p>        
      </section>
      <section className='App-header'>
	<div>
  {/*grid.map((row, rowIdx) => {
          return <Node />
        })*/}
	</div>
</section>

<section className='App-header'>
	<p>
  <span><img src={screen1} className="screen1" alt="screen" /></span>
  <span><img src={screen2} className="screen" alt="screen" /></span>
  <span><img src={screen3} className="screen" alt="screen" /></span>
	</p>
</section>
<section className='App-header'>
	<div>
  <p className='rules'>{text1}</p>
  <p className='rules'>{text2}</p>
  <p>
  <span><a href="https://play.google.com/store/apps/details?id=com.baduk.android"><img src={googlePlay} alt="google play" href="https://reactjs.org"/></a></span>
  <span><a href="https://apps.apple.com/us/app/classicgo/id6618159015?platform=iphone"><img src={appStore} alt="app store" /></a></span>
  </p>
    	</div>
</section>
    </div>
  );
}

class Node extends React.Component {
  // props has x and y number.
  // x stands for row and y for column.
  // (imagine the X and Y coordinates with origin in the upper-left corner of the window and x coordinate directs right and y directs going down)
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <hr className='cc'></hr>
        <hr className='cc1'></hr>
        </section>
    );
  }
}

export default App;
