import React from 'react';
import './styles/App.css';
//import Recipe from './components/Recipe';
//import BandInfo from './components/BandInfo';
//import ShakespeareInfo from './components/ShakespeareInfo';
//import PlaysList from './components/PlaysList';
//import Movie from "./components/Movie"; 
//import Clock from "./components/Clock";
import Pet from "./components/Pet";

const App = () => {
  return (
    // <div className="App">
    //   <BandInfo />
    // </div>

    // <div className="App">
    //   <h1>Рецепт Піци</h1>
    //   <Recipe />
    // </div>

  //   <div className="App">
  //   <ShakespeareInfo />
  //   <PlaysList />
  // </div>

//   <div className="App">
//   <Movie
//     title="Барбі"
//     director="Ґрета Ґервіґ"
//     year={2023}
//     studio="IMAX"
//     poster="https://uaserial.tv/images/serials/64/64ad468011806973336367.webp"
//   />
// </div>

 //<div className="App">
      //<Clock /> {}
    //</div> 
    <div className="App">
      <Pet
        name="Мурка"
        species="Кішка"
        breed="Перська"
        age={3}
        favoriteFood="Риба"
        photo="data:image/jpeg;base64,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" 
      />
    </div>
  );
};

export default App;
