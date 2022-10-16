import { useEffect, useState } from "react";
import CharacterList from './components/CharacterList'
import Character from './components/Character'

function App() {

  return (
    <div className="bg-dark text-white">
      <h1 className="text-center display-1 p-4">Rick and Morty</h1>
      <CharacterList ></CharacterList>
      
    </div>
  );
}

export default App;
