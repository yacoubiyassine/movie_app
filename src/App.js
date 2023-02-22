import { useState } from 'react';
import './App.css';
import Data from './Assets/Data';
import MovieList from './Component/MovieList';
import Navigation from './Component/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Addmovie from './Component/Addmovie';

function App() {
  const [data,setData] = useState(Data);
  const [search,setSearch] = useState("");
  
  console.log(search);
  return (
    <div className="App">
      <Navigation setSearch={setSearch}/>
      <Addmovie setData={setData} data={data}/>
      <MovieList data={data} search={search}/>
      
    </div>
  );
}

export default App;
