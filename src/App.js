import React from 'react';
import './App.css';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Main from './Components/Main';
import SubContents from './Components/SubContents';
import Advertisement from './Components/Advertisement';

function App() {
  return (
    <div className="App">
      <div class = "flex">
        <Header />
      </div>
      <div class="flex">
        <div>
          <Navigation />
        </div>
        <div>
          <Main>
            <div class="flex">
              <SubContents />
              <SubContents />
              <SubContents />
            </div>
            <div class="flex">
              <Advertisement />
            </div>
          </Main>
        </div>
      </div>
    </div>
  );
}

export default App;
